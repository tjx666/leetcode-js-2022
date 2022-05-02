/**
 * 思路：快慢双指针，如果有环，快的指针最后肯定会追上慢指针
 * 时间复杂度: n
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {boolean}
 */
 function hasCycle(head) {
    if (head === null || head.next === null) return false;

    let fast = head.next.next;
    let slow = head.next;

    while (fast !== null && fast.next !== null) {
        if (fast === slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
}