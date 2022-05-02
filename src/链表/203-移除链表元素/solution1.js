/**
 * 原地删除
 * 小技巧：使用一个辅助头结点，这样处理头结点和其它节点就没什么区别
 * 时间复杂度：n，遍历一遍
 * 空间复杂度：1
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    let helperHead = { next: head };

    let pre = helperHead;
    let current = head;
    while (current !== null) {
        if (current.val === val) {
            pre.next = current.next;
            current = pre.next;
        } else {
            pre = current;
            current = current.next;
        }
    }
    return helperHead.next;
}
