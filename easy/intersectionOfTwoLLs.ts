// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
): ListNode | null {
    const data = new Map();
    let intersection: ListNode | null = null;
    // filled data
    while (headA !== null) {
        data.set(headA, headA.val);
        headA = headA.next;
    }

    while (headB !== null && intersection === null) {
        if (data.has(headB)) {
            intersection = headB;
        }
        headB = headB.next;
    }

    return intersection;
}
