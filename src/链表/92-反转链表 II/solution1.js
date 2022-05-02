import { createLinkList } from '../utils/list.js';

/**
 * 思路：原地翻转，没什么难的，就是需要处理的边界情况比较多
 * 时间复杂度：right
 * 空间复杂度：1
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseBetween(head, left, right) {
    // [3,5]
    // 1
    // 2
    let len = right - left;
    // 只有一个节点或者翻转区域只有一个节点就不需要翻转了
    if (head.next === null || len === 0) return head;

    let node = head;
    /** @type {ListNode} */
    let pre = null;
    for (let i = 0; i < left - 1; i++) {
        pre = node;
        node = node.next;
    }
    // 前半条链表的尾结点，可能为 null
    const frontPartTail = pre;
    const middlePartHead = node;

    pre = node;
    node = node.next;
    for (let i = 0; i < len; i++) {
        const { next } = node;
        node.next = pre;
        pre = node;
        node = next;
    }
    // 可能为 null
    const backPartEnd = node;
    const middlePartTail = pre;

    let resultListHead = frontPartTail ? head : middlePartTail;
    if (frontPartTail !== null) frontPartTail.next = middlePartTail;
    middlePartHead.next = backPartEnd;

    return resultListHead;
}

function main() {
    const list = createLinkList([1, 2, 3, 4, 5]);
    reverseBetween(list, 2, 4);
}

main();
