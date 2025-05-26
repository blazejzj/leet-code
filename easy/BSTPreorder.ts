// @ts-ignore
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val];

    const nums = [];
    function traverse(root: TreeNode): null {
        if (!root) return null;
        // root left right

        nums.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root);
    return nums;
}
