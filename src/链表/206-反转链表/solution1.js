/**
 * 需要完整遍历一遍，最佳时间复杂度至少为 n
 * 思路：递归，对一个链表翻转，可以先对 next 节点开始的子链表翻转
 * 时间复杂度：n，按照链表路径一路递归到底
 * 空间复杂度: n，递归需要栈空间，深度为 n
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head === null) return null;

    if (head.next === null) return head;

    const { next } = head;
    // 先翻转 next 节点开始的子链表
    const tail = reverseList(next);
    // 头节点放到最后
    next.next = head;
    // 头节点变成尾结点后 next 置空表示结束
    head.next = null;

    // 原本的尾结点就是翻转后的头结点
    return tail;
}
