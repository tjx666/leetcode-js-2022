function linkListToArray(linkList) {
    const result = [];
    let node = linkList;
    while (node) {
        result.push(node);
        node = node.next;
    }
    return result;
}

/**
 * 思路：
 * 空间换时间，将链表转栈
 * 使用辅助节点和头插法
 * 时间复杂度：max(m, n)
 * 空间复杂度：m + n
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const stack1 = linkListToArray(l1);
    const stack2 = linkListToArray(l2);

    const helperHead = { next: null };
    let carry = 0;
    while (stack1.length || stack2.length || carry === 1) {
        const node1 = stack1.pop();
        const node2 = stack2.pop();
        const sum = (node1?.val ?? 0) + (node2?.val ?? 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        const newNode = {
            val: sum % 10,
            next: helperHead.next,
        };
        helperHead.next = newNode;
    }

    return helperHead.next;
}
