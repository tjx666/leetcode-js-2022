/**
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
