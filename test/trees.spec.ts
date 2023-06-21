import { depth_of_tree, BinaryTreeNode, dfs, TreeNode } from '~/trees';
import { expect } from 'chai';

describe('Testing tree depth function', () => {
    const tree: BinaryTreeNode = {
        value: 10,
        left: {
            value: 8,
            left: {
                value: 3,
            },
        },
        right: {
            value: 8,
            right: {
                value: 3,
            },
        },
    };
    const tree_deep: BinaryTreeNode = {
        value: 10,
        left: {
            value: 8,
            left: {
                value: 10,
                left: {
                    value: 8,
                    left: {
                        value: 3,
                    },
                },
            },
        },
    };

    it('The tree should have the expected depth', () => {
        expect(depth_of_tree(tree)).to.equal(3);
    });

    it('The deep tree should have its expected depth', () => {
        expect(depth_of_tree(tree_deep)).to.equal(5);
    });
});

describe('dfs', () => {
  it('should return the root node if it has the target value', () => {
    const root = new TreeNode(1);
    const result = dfs(root, 1);
    expect(result).to.equal(root);
  });

  it('should return the child node with the target value', () => {
    const child = new TreeNode(2);
    const root = new TreeNode(1, [child]);
    const result = dfs(root, 2);
    expect(result).to.equal(child);
  });

  it('should return null if the target value is not found', () => {
    const root = new TreeNode(1, [new TreeNode(2), new TreeNode(3)]);
    const result = dfs(root, 4);
    expect(result).to.equal(null);
  });

  it('should find nodes at different depths', () => {
    const child1 = new TreeNode(2, [new TreeNode(4)]);
    const child2 = new TreeNode(3);
    const root = new TreeNode(1, [child1, child2]);
    const result = dfs(root, 4);
    expect(result).to.equal(child1.children[0]);
  });
});
