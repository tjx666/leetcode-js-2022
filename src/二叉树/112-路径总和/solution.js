/**
 * 思路：递归 DFS
 * 时间复杂度：n，节点数
 * 空间复杂度：h，数深
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
function hasPathSum(root, targetSum) {
    if (root === null) return false;

    const isLeaf = root.left === null && root.right === null;
    const restSum = targetSum - root.val;
    if (isLeaf) {
        return restSum === 0;
    } else {
        return hasPathSum(root.left, restSum) || hasPathSum(root.right, restSum);
    }
}
