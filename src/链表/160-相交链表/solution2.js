/**
 * 算法复杂度最优为 min(m + n)
 * 
 * 思路：
 * 双指针，一个从链表 headA 开始遍历，一个从 headB 遍历，
 * 如果链表 A 遍历结束时从 headB 继续遍历，链表 B 遍历结束从 headA 继续遍历
 * 因为俩指针速度一样，按照上面的遍历方法，他俩一定会在路程相同的地方相遇，也就是交点处
 * 
 * 时间复杂度：m + n
 * 空间复杂度: 1
 * @param {ListNode} headA 节点数为 m
 * @param {ListNode} headB  节点数为 n
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    let currentA = headA;
    let currentB = headB;
    while (currentA !== currentB) {
        currentA = currentA.next;
        currentB = currentB.next;

        if (currentA === null && currentB === null) return null;

        if (currentA === null) {
            currentA = headB;
        }

        if (currentB === null) {
            currentB = headA;
        }
    }

    return currentA;
}
