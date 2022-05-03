/**
 * 示例：模拟栈
 * 时间复杂度：n
 * 空间复杂度：n，退化成链表的时候
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
    if (root === null) return [];

    const stack = [];
    const result = [];
    let node = root;
    while (node || stack.length !== 0) {
        if (node) {
            result.push(node.val);
            stack.push(node);
            node = node.left;
        } else {
            const top = stack.pop();
            if (top) node = top.right;
        }
    }
    return result;
}
