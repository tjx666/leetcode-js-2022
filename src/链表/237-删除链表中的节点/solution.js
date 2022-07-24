/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}
