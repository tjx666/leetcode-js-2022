function isLeaf(node) {
    return node && node.left === null && node.right === null;
}

/**
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
    let sum = 0;

    /**
     * @param {TreeNode} node
     */
    function dfs(node, isLeft) {
        if (node === null) return;

        if (isLeft && isLeaf(node)) {
            sum += node.val;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    }
    dfs(root, false);

    return sum;
}
