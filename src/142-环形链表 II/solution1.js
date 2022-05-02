/**
 * 直接看 141-环形链表
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
    let node = head;
    const set = new Set();

    while (node !== null) {
        if (set.has(node)) return node;
        set.add(node);
        node = node.next;
    }

    return null;
}
