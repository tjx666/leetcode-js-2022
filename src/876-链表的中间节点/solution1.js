/**
 * 因为必须至少遍历一遍所有节点才能知道总数有多少，才能确定中间节点，因为时间复杂度最低为 n
 * 这里采用将链表转数组，直接取中间下标
 * 
 * 时间复杂度：n，遍历一遍
 * 空间复杂度：n，使用长度为 n 的数组
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
    const list = [];
    let node = head;
    while (node !== null) {
        list.push(node);
        node = node.next;
    }
    return list[Math.trunc(list.length / 2)];
}
