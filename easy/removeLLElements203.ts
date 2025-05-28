// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) return null;

    const dummy = { val: -1, next: head } as ListNode;
    let prev: ListNode | null = dummy;
    let curr: ListNode | null = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr?.next;
    }

    return dummy.next;
}
