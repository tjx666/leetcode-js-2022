/**
 * 思路：模拟递归
 * 当遍历节点为 null，查看栈顶节点时，不能直接出栈，按照遍历顺序要要先遍历右节点，
 * 但是当遍历回来这个节点位置时，你需要判断这个节点是从左子节点回来的还是右子节点回来的
 * 可以在左子节点过来是使用 Set 保存
 * 
 * 时间复杂度：n
 * 空间复杂度：h，树深
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
    if (root === null) return [];

    const result = [];
    const stack = [root];
    const visitedSet = new Set([]);
    let node = root.left;

    while (node || stack.length !== 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            // 核心代码
            const top = stack[stack.length - 1];
            if (visitedSet.has(top)) {
                result.push(top.val);
                stack.pop();
            } else {
                visitedSet.add(top);
                node = top.right;
            }
        }
    }

    return result;
}
