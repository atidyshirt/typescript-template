import { TreeNode, dfs } from './trees';

const child1 = new TreeNode(2, [new TreeNode(4)]);
const child2 = new TreeNode(3);
const root = new TreeNode(1, [child1, child2]);
const result = dfs(root, 4);
console.log('DFS seach for node 4: ', result);
