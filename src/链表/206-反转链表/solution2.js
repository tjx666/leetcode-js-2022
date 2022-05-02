/**
 * 原地翻转
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head === null) return null;

    if (head.next === null) return head;

    let pre = head;
    let current = head.next;

    while (current !== null) {
        // 保存当前的 next 节点
        const { next } = current;
        current.next = pre;
        pre = current;
        // 不能写 current = current.next，因为此时已经被指向了 pre
        current = next;
    }
    head.next = null;

    return pre;
}
