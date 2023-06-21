export interface BinaryTreeNode {
    value: number;
    left?: BinaryTreeNode;
    right?: BinaryTreeNode;
}

export const depth_of_tree = (root: BinaryTreeNode, depth = 0): number => {
    depth++;
    const leftDepth = root.left ? depth_of_tree(root.left, depth) : depth;
    const rightDepth = root.right ? depth_of_tree(root.right, depth) : depth;
    return Math.max(leftDepth, rightDepth);
};

export class TreeNode {
    value: number;
    children: TreeNode[];

    constructor(value: number, children: TreeNode[] = []) {
        this.value = value;
        this.children = children;
    }
}

export function dfs(root: TreeNode, target: number): TreeNode | null {
    if (root.value === target) {
        return root;
    }
    for (let child of root.children) {
        const result = dfs(child, target);
        if (result !== null) {
            return result;
        }
    }
    return null;
}
