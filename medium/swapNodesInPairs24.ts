class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let dummy = new ListNode(0, head);
    let prev = dummy;
    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = first.next;

        first.next = second?.next;
        second.next = first;
        prev.next = second;

        prev = first;
    }
    return dummy.next;
}
