class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let i = l1;
    let j = l2;
    let k = new ListNode(0, null);
    let result = k;
    let carry = 0;

    while (i !== null || j !== null) {
        let value = carry;
        if (i !== null) value += i.val;
        if (j !== null) value += j.val;

        k.val = value % 10;
        carry = Math.floor(value / 10);

        if (i !== null) i = i.next;
        if (j !== null) j = j.next;

        if (i !== null || j !== null) {
            k.next = new ListNode(0, null);
            k = k.next;
        }
    }

    if (carry > 0) {
        k.next = new ListNode(carry);
    }

    return result;
}
