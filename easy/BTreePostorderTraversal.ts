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

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const nums: number[] = [];

    function traverse(root: TreeNode) {
        if (!root) return null;

        traverse(root.left!);
        traverse(root.right!);
        nums.push(root.val);
    }
    traverse(root);
    return nums;
}
