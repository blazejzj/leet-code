class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;
    const arr: number[] = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        right--;
        left++;
    }
    return true;
}

// console.log(isPalindrome(new ListNode(1, new ListNode(2, null))));

console.log(
    isPalindrome(
        new ListNode(
            1,
            new ListNode(
                2,
                new ListNode(
                    3,
                    new ListNode(3, new ListNode(2, new ListNode(1, null)))
                )
            )
        )
    )
);
