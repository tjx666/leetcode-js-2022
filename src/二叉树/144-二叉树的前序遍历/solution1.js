/**
 * 思路：递归，前序遍历就是说中间节点最先遍历
 * 时间复杂度：n
 * 空间复杂度：树的深度
 * 
 * 事实上有空间复杂度为 1 的解法，相对来说理解起来比较复杂可以看看 leetcode 官方题解
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
    if (root === null) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
}
