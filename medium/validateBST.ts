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
let previous;

function isValidBST(root: TreeNode | null): boolean {
    previous = null;
    function traverse(node: TreeNode | null) {
        if (node === null) return true;
        if (!traverse(node.left)) return false;
        if (previous !== null && node.val <= previous) return false;
        previous = node.val;
        return traverse(node.right);
    }

    return traverse(root);
}
