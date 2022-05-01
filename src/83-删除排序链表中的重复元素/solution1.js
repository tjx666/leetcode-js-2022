/**
 * 思路：双指针，慢的那个表示最后一个重复节点，快的用来遍历节点
 * 时间复杂度：n, 遍历一遍链表
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (head === null) return null;

    let tail = head;
    let node = head.next;

    while (node !== null) {
        if (node.val !== tail.val) {
            tail.next = node;
            tail = node;
        }

        node = node.next;
    }

    tail.next = null;
    
    return head;
}
