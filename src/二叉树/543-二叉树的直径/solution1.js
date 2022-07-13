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

/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    if (root === null) return 0;

    // 直径最大节点数
    let max = -Infinity;

    /**
     * 遍历每个节点的时候取左右子树最大深度
     * @param {TreeNode} node
     */
    function dfs(node) {
        if (node === null) return;

        const leftChildTreeMaxDepth = maxDepth(node.left);
        const rightChildTreeMaxDepth = maxDepth(node.right);
        const currentMax = leftChildTreeMaxDepth + 1 + rightChildTreeMaxDepth;
        if (currentMax > max) {
            max = currentMax;
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    // 直径为节点数减一
    return max - 1;
}
