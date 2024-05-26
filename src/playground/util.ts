export type TreeNode = {
  id: string,
  name: string,
  text: string;
  label: string,
  children: Array<TreeNode>,
  items?: Array<TreeNode>,
  searchResult: boolean,
  open: boolean,
  isGroup: boolean;
  num: string;
  link: string;
  hash: string;

}

export function checkTreeData(data: Array<TreeNode>, parentNum = '') {
  data.forEach((item, index) => {
    item.children = item.children || item.items || [];
    item.open = true;
    item.isGroup = item.children.length > 0;
    item.num = `${parentNum}${index + 1}.`;
    item.label = `${item.num}${item.text}`;
    if (item.link) {
      const id = item.link.replaceAll('/', '__').substring(1, Infinity);
      item.id = id;
      item.hash = `#${item.id}`;
    }
    if (item.isGroup) {
      checkTreeData(item.children, item.num);
    }
  });
  return data;
}



const flatTree = (node: TreeNode, result: Array<TreeNode>) => {
  const loop = (node: TreeNode) => {
    if (Array.isArray(node)) {
      node = node[0];
    }
    result.push(node);
    const children = node.children || [];
    for (let i = 0, len = children.length; i < len; i++) {
      loop(children[i]);
    }
  };
  loop(node);
};


export const searchTree = (keywords: string, data: Array<TreeNode>) => {
  if (!keywords) {
    return data;
  }
  const getNodeLabel = (node: TreeNode) => {
    return node.label;
  };

  const contains = (node: TreeNode, parent: TreeNode | Array<TreeNode>, index: number) => {
    const isLayer = node.children.length === 0;
    if (!isLayer) {
      const cloneNode = Object.assign({}, node);
      cloneNode.children = node.children.map(child => {
        return child;
      });
      node = cloneNode;
      if (Array.isArray(parent)) {
        parent[index] = cloneNode;
      } else {
        parent.children[index] = cloneNode;
      }
    }
    const children = node.children || [];
    node.children = children.filter(child => {
      const temps: Array<TreeNode> = [];
      nodeHasChildren(child, temps);
      return temps.length > 0;
    });
    node.label = getNodeLabel(node);
    node.children.forEach((child, idx) => {
      contains(child, node, idx);
    });
  };
  const nodeHasChildren = (node: TreeNode, temps: Array<TreeNode>) => {
    if (temps.length) {
      return;
    }
    if (node.searchResult) {
      temps.push(node);
      return;
    }
    const children = node.children;
    const len = children.length;
    if (len === 0) {
      return;
    }
    for (let i = 0; i < len; i++) {
      if (temps.length) {
        break;
      }
      nodeHasChildren(children[i], temps);
    }
  };

  const allNodes: Array<TreeNode> = [];
  const root = {
    label: 'root',
    children: data
  }
  flatTree(root as TreeNode, allNodes);
  allNodes.forEach(node => {
    node.searchResult = false;
  });
  const nodes = allNodes.filter(node => {
    const label = node.label;
    node.searchResult = label.indexOf(keywords) > -1 || keywords.indexOf(label) > -1;
    return node.searchResult;
  });
  nodes.forEach(node => {
    node.searchResult = true;
  });


  const filterData: Array<TreeNode> = [root as TreeNode];
  contains(root as TreeNode, filterData, 0);
  return filterData[0].children;
}

export const locationAchor = (item: any) => {
  const achor = document.querySelector(item.hash);
  if (achor) {
    achor.scrollIntoView(true);
  }
}