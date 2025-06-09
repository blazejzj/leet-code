// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeNodes(head) {
    const dummy = new ListNode(0);
    let tail = dummy;
    let curr = head.next;

    while (curr !== null) {
        let sum = 0;
        while (curr !== null && curr.val !== 0) {
            sum += curr.val;
            curr = curr.next;
        }
        if (sum > 0) {
            let newNode = new ListNode(sum, null);
            tail.next = newNode;
            tail = tail.next;
        }
        if (curr !== null) curr = curr.next;
    }

    return dummy.next;
}
