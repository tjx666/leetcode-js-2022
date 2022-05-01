/**
 * 思路：快慢双指针，快指针先走 n - 1 步，然后两个指针都走，这样当快指针到末尾时，慢指针就是倒数第 n
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    if (head.next === null) return null;

    let fast = head;
    let slow = head;
    let helperHead = { next: head };
    let slowPre = helperHead;

    for (let i = 0; i < n - 1; i++) {
        fast = fast.next;
    }

    if (fast === null) return head.next;

    while (fast.next !== null) {
        fast = fast.next;
        slowPre = slow;
        slow = slow.next;
    }

    slowPre.next = slow.next;

    return helperHead.next;
}
