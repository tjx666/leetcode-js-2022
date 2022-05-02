/**
 * 先看 141-环形链表解法 2，结合官方题解 2 的示意图
 * 这里我演示下我的思考过程：
 * 相遇时：
 * 快指针走了 a + b + n(b + c), 慢指针走了 a + b
 * 已知快指针速度为慢指针两倍
 * a + b + n(b + c) = 2(a + b)
 * n(b + c) = a + b
 * a = nb + nc - b
 * 想办法提取因子 b + c，因为 b + c 相当于饶了一圈
 * a = b(n - 1) + nc
 * a = b(n - 1) + (n - 1)c + c
 * a = (n - 1)(b + c) + c
 * b + c 等于绕一圈
 * 也就是说相遇后，另起一指针 ptr 从头以慢速遍历，slow 继续遍历，ptr 走了 a 后，等于 slow 走了 c + 绕 n - 1 圈
 * 也就是 slow 走回了 交点处
 * 
 * 时间复杂度：n，慢指针遍历了一遍
 * 空间复杂度：1
 * @param {ListNode} head
 * @return {ListNode}
 */
 function detectCycle(head) {
    if (head === null || head.next === null) return null;

    let fast = head.next.next;
    let slow = head.next;

    while (fast !== null && fast.next !== null) {
        if (fast === slow) {
            let node = head;
            while (node !== slow) {
                node = node.next;
                slow = slow.next;
            }
            return node;
        }
        fast = fast.next.next;
        slow = slow.next;
    }

    return null;
}