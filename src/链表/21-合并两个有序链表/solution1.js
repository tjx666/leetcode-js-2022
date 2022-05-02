import { createLinkList } from '../utils/list.js';

/**
 * 条件：m, n 的范围 [0, 50]
 *
 * 思路：
 * 使用两个指针分别遍历 list1 和 list2，每次取当前两个节点更小的节点插入结果链接
 * 更新更小的的节点为 next，当一条链表遍历到头了后，可以直接拿另一条链表的剩余部分插到结果链表最后
 * 
 * 时间复杂度：m + n, 可能发生遍历第一条链表到倒数第一个节点开始遍历第二个链表到末尾
 * 空间复杂度：1 
 * @param {ListNode} list1 长度为 m
 * @param {ListNode} list2 长度为 n
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    let node1 = list1;
    let node2 = list2;

    // 用于辅助插入的头节点
    /** @type {ListNode} */
    let list = { next: null };
    let tail = list;
    while (node1 !== null && node2 !== null) {
        if (node1.val <= node2.val) {
            tail.next = node1;
            tail = node1;
            node1 = node1.next;
        } else {
            tail.next = node2;
            tail = node2;
            node2 = node2.next;
        }
    }

    tail.next = node1 === null ? node2 : node1;
    return list.next;
}

function main() {
    const list1 = createLinkList([1, 2, 4]);
    const list2 = createLinkList([1, 3, 4]);
    mergeTwoLists(list1, list2);
}

main();
