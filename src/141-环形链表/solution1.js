/**
 * 思路：空间换时间，用 set 保存遍历过的节点，如果一直遍历下去遍历到以前遍历过的节点说明有环
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle (head) {
    let node = head;
    const set = new Set();

    while (node !== null) {
        if (set.has(node)) return true;
        set.add(node);
        node = node.next;
    }

    return false;
}