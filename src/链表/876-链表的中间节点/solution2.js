/**
 * 快慢双指针
 * 时间复杂度：n，遍历一遍
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
    let fast = head;
    let slow = head;

    // 1, 2, 3
    // 1, 2, 3, 4
    // 1, 2, 3, 4, 5
    // 1, 2, 3, 4, 5, 6
    // 观察得规律：快指针是尾节点时 slow 就是要的答案，快指针是倒数第二个节点，slow.next 就是要的答案

    while (fast.next !== null && fast.next.next !== null) {
        // 快指针每次走两步
        fast = fast.next.next;
        // 慢指针每次走一步
        slow = slow.next;
    }

    return fast.next === null ? slow : slow.next;
}
