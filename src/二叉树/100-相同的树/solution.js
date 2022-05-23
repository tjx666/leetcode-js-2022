/**
 * 思路：递归
 * 时间复杂度：节点数
 * 空间复杂度：树高
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    if (p === null && q === null) return true;

    if (p === null || q === null) return false;

    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
