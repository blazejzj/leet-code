class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    const ans = head;
    while (head !== null) {
        if (head.next && head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return ans;
}

console.log(
    deleteDuplicates(
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, null))))
    )
);

console.log(
    deleteDuplicates(
        new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(4, new ListNode(4, new ListNode(5, null)))
                )
            )
        )
    )
);

console.log(deleteDuplicates(new ListNode(3, new ListNode(3))));
console.log(
    deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(1, null))))
);
