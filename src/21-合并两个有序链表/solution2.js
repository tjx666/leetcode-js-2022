/**
 * 思路：处理完两个头结点，递归剩下的两条子链表
 * 时间复杂度：m + n
 * 空间复杂度：m + n
 * @param {ListNode} list1 长度为 m
 * @param {ListNode} list2 长度为 n
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    const [smallerNode, biggerNode] = list1.val <= list2.val ? [list1, list2] : [list2, list1];
    smallerNode.next = mergeTwoLists(smallerNode.next, biggerNode);
    return smallerNode;
}

export default mergeTwoLists;
