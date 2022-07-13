/**
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    if (root === null) return 0;

    // 直径最大节点数
    let max = -Infinity;

    /**
     * 思路：递归
     * 时间复杂度：n
     * 空间复杂度：h
     * @param {TreeNode} node
     * @return {number}
     */
    function maxDepth(node) {
        if (node === null) return 0;
        const leftChildTreeMaxDepth = maxDepth(node.left);
        const rightChildTreeMaxDepth = maxDepth(node.right);
        max = Math.max(leftChildTreeMaxDepth + rightChildTreeMaxDepth + 1, max);
        return 1 + Math.max(leftChildTreeMaxDepth, rightChildTreeMaxDepth);
    }

    maxDepth(root);

    // 直径为节点数减一
    return max - 1;
}
