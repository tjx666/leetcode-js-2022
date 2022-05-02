/**
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (head === null || head.next === null) return head;

    const secondNode = head.next;
    const restList = deleteDuplicates(secondNode);
    if (restList === null) {
        head.next = null;
        return head;
    }

    if (head.val === restList.val) {
        return restList;
    } else {
        head.next = restList;
        return head;
    }
}
