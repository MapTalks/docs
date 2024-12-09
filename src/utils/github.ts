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
  { head, folder }: { head: string; folder: string }
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

  await createPR({
    title: isUpdate
      ? `update: edit ${folder} playground`
      : `feature: add ${folder} playground`,
    body: isUpdate ? `edit ${folder} playground` : `add ${folder} playground`,
    head,
  });
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
  content: File[],
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
        headers: {
          ...COMMON_HEADERS
        },
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
              ? `update: edit ${folder} examples`
              : `feature: add ${folder} examples`,
            tree: treeRes.data.sha,
            parents: [data.oid],
            author: committer,
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
            // return await createPR({
            //   repositoryId: data.repositoryId,
            //   branch,
            //   title: isUpdate
            //     ? `update: edit ${folder} playground`
            //     : `feature: add ${folder} playground`,
            //   body: isUpdate
            //     ? `edit ${folder} playground`
            //     : `add ${folder} playground`,
            // });
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

export async function deleteFile(file: File) {
  const res = await octokit.request(
    "DELETE /repos/{owner}/{repo}/contents/{path}",
    {
      owner,
      repo,
      path: file.path,
      message: "my commit message",
      committer,
      sha: file.sha,
      headers: {
        ...COMMON_HEADERS,
      },
    }
  );

  return res;
}

/**
 * 在 github 创建 pr
 * @param title
 * @param body
 * @param head
 */
export async function createPR({
  title,
  body,
  head,
}: {
  title: string;
  body: string;
  head: string;
}) {
  const res = await octokit.request("POST /repos/{owner}/{repo}/pulls", {
    owner,
    repo,
    title,
    body,
    head,
    base: BASE_BRANCH,
    headers: {
      ...COMMON_HEADERS,
    },
  });

  return res;
}

export async function createFolder(body: {
  name: string;
  playgroundType: string;
  sha: string;
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
        commit_sha: body.sha,
        headers: {
          ...COMMON_HEADERS,
        },
      })
    );

    if (!ce && cr) {
      // 3: 创建文件🌲
      const [treeError, treeRes] = await to<any>(
        octokit.request(`POST /repos/{owner}/{repo}/git/trees`, {
          owner,
          repo,
          tree_sha: cr.data.tree.sha,
          tree: [
            {
              path: `${body.playgroundType}/${body.name}/.gitkeep`,
              mode: "100644", // 普通文件权限
              type: "blob",
              content: btoa(``),
              // content: Buffer.from('').toString('base64'),
            },
          ],
          headers: {
            ...COMMON_HEADERS,
          },
        })
      );

      if (!treeError && treeRes) {
        // 4: 依据文件树创建commit
        const [commitError, commitRes] = await to<any>(
          octokit.request("POST /repos/{owner}/{repo}/git/commits", {
            owner,
            repo,
            message: "docs: add folder",
            author: committer,
            parents: [data.sha],
            tree: treeRes.data.sha,
            committer,
            headers: {
              ...COMMON_HEADERS,
            },
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
            // await to(
            //   createPR({
            //     repositoryId: data.repositoryId,
            //     branch,
            //     title: `update: add folder ${body.playgroundType}/${body.name}`,
            //     body: `add folder ${body.playgroundType}/${body.name}`,
            //   })
            // );
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
