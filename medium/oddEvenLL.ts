// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    let even = head;
    let odd = head?.next;
    const oddPointer = odd;
    const evenPointer = even;

    while (even.next != null) {
        even.next = odd.next;
        if (even.next) {
            even = even.next;
        }
        odd.next = even.next;
        if (odd.next) {
            odd = odd.next;
        }
        if (even.next === null) {
            even.next = oddPointer;
            return evenPointer;
        }
    }
    return null;
}

console.log(
    oddEvenList(
        new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(3, new ListNode(4, new ListNode(5, null)))
            )
        )
    )
);
