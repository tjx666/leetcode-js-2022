/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
    let current = head;
    let num = 0;
    while (current !== null) {
        num = num * 2 + current.val;
        current = current.next;
    }
    return num;
}
