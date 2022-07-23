/**
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：h，递归深度
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root === null) return null;

    const temp = root.right;
    root.right = root.left;
    root.left = temp;

    if (root.left) {
        invertTree(root.left);
    }

    if (root.right) {
        invertTree(root.right);
    }

    return root;
}
