/**
 * 链表这种数据结构天生就是很适合使用递归
 * 时间复杂度：n
 * 空间复杂度：n，递归深度为 n，栈空间也就是 n
 * 
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    if (head === null) return null;

    if (head.val === val) {
        return removeElements(head.next, val);
    } else {
        const nextHead = removeElements(head.next, val);
        head.next = nextHead;
        return head;
    }
}
