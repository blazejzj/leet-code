// @ts-ignore
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// function rotateRight(head: ListNode | null, k: number): ListNode | null {
//     if (!head) return null;
//     if (!head.next) return head;

//     // iterate k amount of times (shift k amount of times)
//     for (let i = 0; i < k; i++) {
//         let firstElem: ListNode | null = head;
//         let lastElem: ListNode | null = head;
//         let prev: ListNode | null = null;

//         while (lastElem.next !== null) {
//             // we found our last and next last elemens
//             prev = lastElem;
//             lastElem = lastElem?.next;
//         }

//         lastElem.next = firstElem;
//         prev.next = null;
//         head = lastElem;
//         // now we need to make the last (next last element point to null)
//         // and the last element to point at the first element
//     }
//     return head;
// }

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    let length = 1;
    let firstNode = head;
    let curr = head;
    while (curr) {
        if (curr.next === null) {
            curr.next = firstNode;
            break;
        }
        length++;
        curr = curr.next;
    }

    // how many places from the head will be the new head?
    k = k % length;

    let newTail = firstNode;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
}

console.log(
    rotateRight(
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, null)))
        ),
        1
    )
);
