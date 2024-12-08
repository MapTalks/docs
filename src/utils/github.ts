import { ElNotification, dayjs } from "element-plus";

import { Octokit } from "octokit";
import { get } from "lodash";
import { to } from "./to";

const BASE_BRANCH = "main";

const COMMON_HEADERS = {
  "X-GitHub-Api-Version": "2022-11-28",
};

const owner = import.meta.env.GITHUB_OWNER;
const repo = import.meta.env.GITHUB_REPO;
const committer = {
  name: import.meta.env.GITHUB_AUTHOR_NAME,
  email: import.meta.env.GITHUB_AUTHOR_EMAIL,
};

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: getGithubToken(),
});

export function getGithubToken() {
  return import.meta.env.GITHUB_AUTH_TOKEN;
}

export function buildBranch() {
  return `feature/docs-${dayjs().format("YYYY-MM-DD-HH-mm")}`;
}

/**
 * 获取分支信息
 * @returns 分支信息
 */
export async function getBranch() {
  const resp = await octokit.request(
    "GET /repos/{owner}/{repo}/branches/{branch}",
    {
      owner,
      repo,
      branch: `refs/heads/${BASE_BRANCH}`,
      headers: {
        ...COMMON_HEADERS,
      },
    }
  );
  return resp;
}

export async function createBranch(branchName: string) {
  const [error, res] = await to(getBranch());

  if (!error && res) {
    const [e, r] = await to(
      octokit.request("POST /repos/{owner}/{repo}/git/refs", {
        owner,
        repo,
        ref: `refs/heads/${BASE_BRANCH}`,
        sha: res.commit.sha,
        headers: {
          ...COMMON_HEADERS,
        },
      })
    );

    if (!e && r) {
      return {
        nodeId: get(res, "node_id"),
        branchName: `refs/heads/${branchName}`,
        oid: get(res, "repository.ref.target.oid", ""),
        ref: get(r, "createRef.ref", {}),
      };
    }
  }

  return res;
}

/**
 * 匹配文件 sha
 * @param currentFiles
 * @param oldFiles
 * @returns
 */

interface File {
  name: string;
  needUpdate: boolean;
  sha: string;
  path: string;
  content: string;
}

export function matchSha(currentFiles: File[], oldFiles: File[]) {
  let needUpdate = false;
  for (let i = 0; i < currentFiles.length; i++) {
    const currentFile = currentFiles[i];

    for (let j = 0; j < oldFiles.length; j++) {
      const oldFile = oldFiles[j];

      if (currentFile.path === oldFile.path) {
        oldFile.sha = currentFile.sha;
        if (currentFile.content !== oldFile.content) {
          needUpdate = true;
          oldFile.needUpdate = true;
        }
        break;
      }
    }
  }

  return {
    needUpdate,
    data: oldFiles.filter((file) => file.needUpdate),
  };
}

export function getFolder(currentFiles: File[]) {
  if (!currentFiles || currentFiles.length === 0) return false;
  const path = currentFiles[0].path;

  if (path) {
    const pathArr = path.split("/");

    // 我们示例目录固定为三级
    return pathArr.slice(0, 3).join("/");
  }

  return false;
}

/**
 * 创建新文件
 * @param files
 * @param branch
 * @param folder
 */
export async function createFile(
  files: File[],
  { branch, folder, repositoryId }: any
) {
  let isUpdate = false;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!isUpdate && file.sha) {
      isUpdate = true;
    }

    await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
      owner,
      repo,
      path: folder ? `${folder}/${file.path}` : file.path,
      message: file.sha
        ? `docs: update ${file.name}`
        : `docs: add file ${file.name}`,
      committer,
      content: btoa(file.content),
      headers: {
        ...COMMON_HEADERS,
      },
    });
  }

  await to(
    createPR({
      repositoryId,
      branch,
      title: isUpdate
        ? `update: edit ${folder} playground`
        : `feature: add ${folder} playground`,
      body: isUpdate ? `edit ${folder} playground` : `add ${folder} playground`,
    })
  );
}

export function filterFolder(list: any) {
  if (!list.children || list.children.length === 0) {
    return list;
  }

  const newTree = { ...list };
  newTree.children = list.children.map((child: any) => {
    const newChild = { ...child };
    if (newChild.children && newChild.children.length > 0) {
      newChild.children = [];
    }
    return newChild;
  });

  return newTree;
}

export function filterFolders(list: any[]) {
  return list.map(filterFolder);
}

export async function updatePlayground(
  folder: string,
  content: any[],
  isUpdate = false
) {
  const branch = buildBranch();

  const [error, data] = await to(createBranch(branch));

  if (!error && data) {
    // 2: 获取最新 commit 的树对象
    const [ce, cr] = await to<any>(
      octokit.request("GET /repos/{owner}/{repo}/git/commits/{commit_sha}", {
        owner,
        repo,
        commit_sha: data.oid,
        headers: {},
      })
    );

    if (!ce && cr) {
      // 3: 创建文件🌲
      const [treeError, treeRes] = await to<any>(
        octokit.request(`POST /repos/{owner}/{repo}/git/trees`, {
          owner,
          repo,
          base_tree: cr.data.tree.sha,
          tree: content.map((file) => ({
            path: folder ? `${folder}/${file.path}` : file.path,
            mode: "100644", // 普通文件权限
            type: "blob",
            // todo: 需要判断是否是更新, 更新的话需要传入 content
            // sha: file.sha ? file.sha : '',
            // 使用文件树的话不需要 btoa
            content: file.content,
          })),
          headers: {},
        })
      );

      if (!treeError && treeRes) {
        // 4: 依据文件树创建commit
        const [commitError, commitRes] = await to<any>(
          octokit.request("POST /repos/{owner}/{repo}/git/commits", {
            owner,
            repo,
            message: isUpdate
              ? `update: edit ${folder} playground`
              : `feature: add ${folder} playground`,
            tree: treeRes.data.sha,
            parents: [data.oid],
            committer: "",
            author: "",
            headers: {},
          })
        );

        // 5: 更新到对应的分支
        if (!commitError && commitRes) {
          const [updateError, updateRes] = await to(
            octokit.request("PATCH /repos/{owner}/{repo}/git/refs/{ref}", {
              owner,
              repo,
              ref: `heads/${branch}`,
              sha: commitRes.data.sha,
              headers: {},
            })
          );

          if (!updateError && updateRes) {
            // 6: 创建pr
            return await createPR({
              repositoryId: data.repositoryId,
              branch,
              title: isUpdate
                ? `update: edit ${folder} playground`
                : `feature: add ${folder} playground`,
              body: isUpdate
                ? `edit ${folder} playground`
                : `add ${folder} playground`,
            });
          }
          ElNotification({
            title: "",
            message: "",
            type: "error",
          });
        } else {
          ElNotification({
            title: "",
            message: "",
            type: "error",
          });
        }
      } else {
        ElNotification({
          title: "",
          message: "",
          type: "error",
        });
      }
    } else {
      ElNotification({
        title: "",
        message: "",
        type: "error",
      });
    }
  } else {
    ElNotification({
      title: "",
      message: "",
      type: "error",
    });
  }
}

/**
 * 获取仓库的文件目录树
 */
export async function getFileTree(sha = "main", depth = 0, path = "") {
  if (depth > 2) return [];

  const [error, res] = await to<any>(
    octokit.graphql(
      `
      query($owner: String!, $repo: String!, $expression: String!) {
        repository(owner: $owner, name: $repo) {
          object(expression: $expression) {
            ... on Tree {
              entries {
                mode
                path
                name
                type
                sha: oid
                object {
                  ... on Tree {
                    entries {
                      mode
                      path
                      name
                      type
                      oid
                      object {
                        ... on Tree {
                          entries {
                            mode
                            path
                            name
                            type
                            oid
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
      {
        owner,
        repo,
        expression: `${sha}:`,
        headers: {},
      }
    )
  );

  if (!error && res.repository) {
    const data = (get(res, "repository.object.entries", []) as any).filter(
      (item: any) => item.type === "tree"
    );

    const appStore = useAppStoreHook() as any;
    const loop = (array: any, parent?: any) => {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];

        const p = appStore.playgroundTypes.find(
          (pl: any) => pl.id === item.name
        );

        if (p) {
          // 给枚举数据赋值上sha
          p.sha = item.sha;
          // 给枚举数据赋值上祖先节点(第一级节点无父级)
          p.ancestors = [];
          assign(item, p);
        } else {
          assign(item, {
            collapse: true,
            ancestors: parent?.ancestors
              ? [
                  ...parent.ancestors,
                  { name: parent.name, oid: parent.oid || parent.sha },
                ]
              : [
                  {
                    name: parent?.name,
                    oid: parent?.oid || parent?.sha,
                  },
                ],
          });
        }

        if (item.type === "tree" && item?.object?.entries?.length > 0) {
          item.children = loop(item.object.entries, item).filter(
            (it: any) => ![".gitkeep"].includes(it.name)
          );
        } else {
          item.children = null;
          item.ancestors = parent?.ancestors
            ? [
                ...parent.ancestors,
                { name: parent.name, oid: parent.oid || parent.sha },
              ]
            : [
                {
                  name: parent?.name,
                  oid: parent?.oid || parent?.sha,
                },
              ];
        }
      }

      return array;
    };

    const newData = loop(data);

    return ascending(newData);
  }

  return [];
}

// 以下文件无需拉取，这是通用公共文件
const excludeFileName = [
  "index.html",
  "vite.config.js",
  "README.md",
  "main.js",
  "package.json",
  ".gitkeep",
];

export async function getPlayground(item: any) {
  const [error, res] = await to<any>(
    octokit.graphql(
      `
      query($owner: String!, $repo: String!, $expression: String!) {
        repository(owner: $owner, name: $repo) {
          object(expression: $expression) {
            ... on Tree {
              entries {
                mode
                path
                name
                type
                sha: oid
                object {
                  ... on Blob {
                    byteSize
                    isBinary
                    text
                  }

                  ... on Tree {
                    entries {
                      mode
                      path
                      name
                      type
                      sha: oid
                      object {
                        ... on Blob {
                          byteSize
                          isBinary
                          text
                        }

                        ... on Tree {
                          entries {
                            mode
                            path
                            name
                            type
                            sha: oid
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
      {
        owner,
        repo,
        // oid: item.oid,
        expression: `${item.oid}:`,
        headers: {},
      }
    )
  );

  const entries = get(res, "repository.object.entries", []);

  const tree: any[] = [];
  const buildTree = (es: any) => {
    for (let i = 0; i < es.length; i++) {
      const entry = es[i];

      if (entry.type === "tree") {
        buildTree(entry.object.entries);
      } else if (
        entry.type === "blob" &&
        !excludeFileName.includes(entry.name)
      ) {
        tree.push({
          ...entry,
          playgroundCode: entry.object.text,
          playgroundPath: entry.path,
        });
      }
    }
  };

  if (!error && entries) {
    buildTree(entries);
    return tree;
  }

  return [];
}

export async function deleteFile(file: { path: string; sha: string }) {
  await octokit.request("DELETE /repos/{owner}/{repo}/contents/{path}", {
    owner,
    repo,
    path: file.path,
    message: "my commit message",
    committer: "",
    author: "",
    sha: file.sha,
    headers: {},
  });
}

/**
 * 在 github 创建 pr
 * todo: 需要判断是否有文件变更
 * @param repositoryId
 * @param branch
 * @param title
 * @param body
 */
export async function createPR({
  repositoryId,
  branch,
  title,
  body,
}: {
  repositoryId: string;
  branch: string;
  title: string;
  body: string;
}) {
  const res =  await octokit.request('POST /repos/{owner}/{repo}/pulls', {
    owner,
    repo,
    title,
    body,
    head: 'octocat:new-feature',
    base: 'master',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return res?.createPullRequest?.pullRequest;
}

export async function createFolder(body: {
  name: string;
  playgroundType: string;
  sha?: string;
}) {
  const branch = buildBranch();

  // 1：创建分支
  const [error, data] = await to(createBranch(branch));

  if (!error && data) {
    // 2: 获取最新 commit 的树对象
    const [ce, cr] = await to<any>(
      octokit.request("GET /repos/{owner}/{repo}/git/commits/{commit_sha}", {
        owner,
        repo,
        commit_sha: data.oid,
        headers: {},
      })
    );

    if (!ce && cr) {
      // 3: 创建文件🌲
      const [treeError, treeRes] = await to<any>(
        octokit.request(`POST /repos/{owner}/{repo}/git/trees`, {
          owner,
          repo,
          base_tree: cr.data.tree.sha,
          tree: [
            {
              path: `${body.playgroundType}/${body.name}/.gitkeep`,
              mode: "100644", // 普通文件权限
              type: "blob",
              content: btoa(``),
              // content: Buffer.from('').toString('base64'),
            },
          ],
          headers: {},
        })
      );

      if (!treeError && treeRes) {
        // 4: 依据文件树创建commit
        const [commitError, commitRes] = await to<any>(
          octokit.request("POST /repos/{owner}/{repo}/git/commits", {
            owner,
            repo,
            message: "docs: add folder",
            tree: treeRes.data.sha,
            parents: [data.oid],
            committer: "",
            author: "",
            headers: {},
          })
        );

        // 5: 更新到对应的分支
        if (!commitError && commitRes) {
          const [updateError, updateRes] = await to(
            octokit.request("PATCH /repos/{owner}/{repo}/git/refs/{ref}", {
              owner,
              repo,
              ref: `heads/${branch}`,
              sha: commitRes.data.sha,
              headers: {},
            })
          );

          if (!updateError && updateRes) {
            // 6: 创建pr
            await to(
              createPR({
                repositoryId: data.repositoryId,
                branch,
                title: `update: add folder ${body.playgroundType}/${body.name}`,
                body: `add folder ${body.playgroundType}/${body.name}`,
              })
            );
          } else {
            ElNotification({
              title: "",
              message: "",
              type: "error",
            });
          }
        } else {
          ElNotification({
            title: "",
            message: "",
            type: "error",
          });
        }
      } else {
        ElNotification({
          title: "",
          message: "",
          type: "error",
        });
      }
    } else {
      ElNotification({
        title: "",
        message: "",
        type: "error",
      });
    }
  } else {
    ElNotification({
      title: "",
      message: "",
      type: "error",
    });
  }
}

export async function updateFolder(body: any) {
  console.log(body);
}

const baseDir = import.meta.env.VITE_BASE_DIR;
// 注意这里缩略图，不同平台获取的路径并不相同
// export const THUMBNAIL_URL = `${window.location.protocol}//${window.location.host}${baseDir ? baseDir : '/'}thumbnails/`;
export const THUMBNAIL_URL = `https://blog.sakitam.com/mtk-playground/thumbnails/`;

function useAppStoreHook() {
  throw new Error("Function not implemented.");
}

function assign(item: any, p: any) {
  throw new Error("Function not implemented.");
}

function ascending(newData: any) {
  throw new Error("Function not implemented.");
}
