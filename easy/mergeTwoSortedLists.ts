class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (list1 === null && list2 === null) {
        return null;
    }

    if (list1 !== null && list2 === null) {
        return list1;
    } else if (list1 === null && list2 !== null) {
        return list2;
    }

    let result = new ListNode(0, null);
    const head = result;

    while (list1 !== null && list2 !== null) {
        let selected: ListNode | null = null;

        if (list1.val < list2.val) {
            selected = list1; // select the smallest node
            list1 = list1.next; // advance in list1
        } else if (list1.val > list2.val) {
            selected = list2;
            list2 = list2.next;
        } else {
            selected = list1; // if equals just select one of them
            list1 = list1.next;
        }
        result.next = selected;
        result = result.next;
    }

    // add remainders
    if (list1 !== null) {
        result.next = list1;
    }
    if (list2 !== null) {
        result.next = list2;
    }
    return head.next;
}

let test1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let test2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
mergeTwoLists(test1, test2);
