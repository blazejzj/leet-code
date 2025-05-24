// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
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

// function sortedListToBST(head: ListNode | null): TreeNode | null {
//     if (head === null) return null;
//     if (head.next === null) return new TreeNode(head.val, null, null);

//     const arr: number[] = [];
//     while (head) {
//         arr.push(head.val);
//         head = head.next;
//     }

//     function buildBST(numArr: number[]) {
//         if (numArr.length <= 0) return null;

//         let mid = Math.floor(numArr.length / 2);

//         let root = new TreeNode(numArr[mid], null, null);

//         root.left = buildBST(numArr.slice(0, mid));
//         root.right = buildBST(numArr.slice(mid + 1, numArr.length));
//         return root;
//     }
//     return buildBST(arr);
// }

function sortedListToBST(head: ListNode | null): TreeNode | null {
    let count = 0;
    let pointer = head;
    while (pointer) {
        count++;
        pointer = pointer.next;
    }

    let current = head;
    function buildBST(count: number): TreeNode | null {
        if (count <= 0) return null;

        const left = buildBST(Math.floor(count / 2));
        const root = new TreeNode(current!.val);

        current = current!.next;

        const right = buildBST(count - Math.floor(count / 2) - 1);

        root.left = left;
        root.right = right;

        return root;
    }

    return buildBST(count);
}

// [-10,-3,0,5,9]

console.log(
    sortedListToBST(
        new ListNode(
            0,
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(
                        3,
                        new ListNode(4, new ListNode(5, new ListNode(6, null)))
                    )
                )
            )
        )
    )
);
