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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Tree 1
let t1a = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// Tree 2 — identical to Tree 1
let t1b = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// Tree 3
let t2a = new TreeNode(1, new TreeNode(2), null);

// Tree 4 — different structure
let t2b = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(t1a, t1b));
console.log(isSameTree(t2a, t2b));
