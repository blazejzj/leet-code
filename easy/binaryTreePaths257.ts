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

function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val.toString()];
    let paths: string[] | null = [];

    function traverse(node: TreeNode | null, currPath: string) {
        if (!node) return;
        if (!node.right && !node.left)
            return paths.push(currPath + node.val.toString());

        // root
        currPath += node.val.toString() + "->";
        // left
        traverse(node.left, currPath);
        //right
        traverse(node.right, currPath);
    }

    traverse(root, "");
    return paths;
}
