/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 */
function check(root1, root2) {
    if (root1 === null && root2 === null) return true;
    else if (root1 === null || root2 === null) return false;
    return root1.val === root2.val && check(root1.left, root2.right) && check(root1.right, root2.left);
}

/**
 * 利用对称的特性，将原树左右互换后应该和原本的树完全相等
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    return check(root.left, root.right);
}
