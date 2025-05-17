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

function inorderTraversal(root: TreeNode | null): number[] {
    let nums: number[] = [];

    function traverse(root: TreeNode | null) {
        if (root === null) return;
        traverse(root.left);
        nums.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    return nums;
}

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node2 = new TreeNode(2, node3, node4);
let node5 = new TreeNode(5);
let root = new TreeNode(1, node5, node2);

console.log(inorderTraversal(root));
