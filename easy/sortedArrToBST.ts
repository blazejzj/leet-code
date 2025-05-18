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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;

    let length = nums.length;
    let m = length / 2;
    let midNode = nums[Math.floor(m)];

    return new TreeNode(
        midNode,
        sortedArrayToBST(nums.slice(0, m)),
        sortedArrayToBST(nums.slice(m + 1, length))
    );
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
sortedArrayToBST([-10, -3, 0, 5, 9]);
