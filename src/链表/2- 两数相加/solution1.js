/**
 * 思路：模拟加法运算
 * 时间复杂度：max(m, n)
 * 空间复杂度：0
 * 递归解法就不写了
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let node1 = l1;
    let node2 = l2;

    const helperHead = { next: null };
    let tail = helperHead;
    let carry = 0;
    while (node1 !== null || node2 !== null || carry === 1) {
        const sum = (node1?.val ?? 0) + (node2?.val ?? 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        const nextNode = {
            val: sum % 10,
            next: null,
        };
        tail.next = nextNode;
        tail = nextNode;
        if (node1 !== null) node1 = node1.next;
        if (node2 !== null) node2 = node2.next;
    }

    return helperHead.next;
}
