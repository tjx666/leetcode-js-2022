/**
 * 思路：链表转数组，再使用首尾双指针
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
    /** @type {ListNode[]} */
    const list = [];
    let node = head;
    while (node !== null) {
        list.push(node);
        node = node.next;
    }

    for (let i = 0, j = list.length - 1; i < j; i++, j--) {
        if (list[i].val !== list[j].val) return false;
    }

    return true;
}
