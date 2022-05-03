/**
 * 思路：模拟栈
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    if (root === null) return [];

    const result = [];
    const stack = [root];
    let node = root.left;

    while (node || stack.length !== 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            const top = stack.pop();
            result.push(top.val);
            node = top.right;
        }
    }

    return result;
}
