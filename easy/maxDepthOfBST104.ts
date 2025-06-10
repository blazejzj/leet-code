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

function maxDepth(root: TreeNode | null): number {
    function traverse(node: TreeNode | null, currMax: number) {
        if (!node) return currMax;

        const left = traverse(node.left, currMax + 1);
        const right = traverse(node.right, currMax + 1);

        if (left > right) return left;
        return right;
    }

    return traverse(root, 0);
}
