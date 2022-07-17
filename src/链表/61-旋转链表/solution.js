import { createLinkList } from '../../utils/list.js';

/**
 * 思路：使用快慢双指针确定倒数第 k + 1 个节点
 * 时间复杂度：n，节点数
 * 空间复杂度：0, 常数级
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
    if (head === null || head.next === null) return head;

    // 先求总共有多少节点
    let count = 0;
    let previous = null;
    let current = head;
    while (current) {
        count++;
        previous = current;
        current = current.next;
    }
    const last = previous;

    k = k % count;

    if (k === 0) return head;

    let slow = head;
    let fast = head;
    for (let i = 0; i < k + 1; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    let newHead = slow.next;
    slow.next = null;
    last.next = head;
    return newHead;
}

async function main() {
    const head = createLinkList([1, 2, 3, 4, 5]);
    rotateRight(head, 2);
}

main();
