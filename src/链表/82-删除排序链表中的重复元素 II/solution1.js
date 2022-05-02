/**
 * 思路：快慢双指针 + 额外定义一个计数器变量保存重复个数
 * 时间复杂度：n, 快指针遍历一遍链表
 * 空间复杂度：1
 * 递归解法就不写了，又绕效率又低
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (head === null || head.next === null) return head;

    const helperHead = { next: head, val: null };

    let slow = helperHead;
    let pre = helperHead;
    let fast = head;
    let repeatCount = 0;

    while (fast !== null) {
        if (fast.val !== pre.val) {
            if (repeatCount !== 0) {
                slow.next = fast;
            } else {
                slow = pre;
            }
            repeatCount = 0;
        } else {
            repeatCount++;
        }
        pre = fast;
        fast = fast.next;
    }

    if (repeatCount !== 0) {
        slow.next = null;
    }

    return helperHead.next;
}
