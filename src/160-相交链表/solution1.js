/**
 * 算法复杂度最优为 min(m + n)
 * 
 * 思路：
 * 先遍历 A 链表存在 set 中，再遍历 B 链表，遍历 B 链表过程中判断当前遍历节点是否已经存在于 set 中
 * 如果存在于 set 中，那么表明当前节点既在 A 链表又在 B 链表，也就是相交节点
 * 
 * 时间复杂度：m + n，最多需要遍历 m + n 个节点
 * 空间复杂度：m
 * 
 * @param {ListNode} headA 节点数为 m
 * @param {ListNode} headB  节点数为 n
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    const setA = new Set([]);
    let currentA = headA;
    while (currentA !== null) {
        setA.add(currentA);
        currentA = currentA.next;
    }

    let currentB = headB;
    while (currentB !== null) {
        if (setA.has(currentB)) {
            return currentB;
        }
        currentB = currentB.next;
    }

    return null;
}
