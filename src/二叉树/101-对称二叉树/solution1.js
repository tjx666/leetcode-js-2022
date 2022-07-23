/**
 * @param {TreeNode} node
 */
function horizontalReverse(node) {
    if (node === null) return null;
    
    const temp = node.right;
    node.right = node.left;
    node.left = temp;

    if (node.left) {
        horizontalReverse(node.left);
    }

    if (node.right) {
        horizontalReverse(node.right);
    }
}

/**
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 */
function isSame(root1, root2) {
    if (root1 === null && root2 === null) return true;
    else if (root1 === null || root2 === null) return false;

    return (
        root1.val === root2.val &&
        isSame(root1.left, root2.left) &&
        isSame(root1.right, root2.right)
    );
}

/**
 * 利用对称的特性，将原树左右互换后应该和原本的树完全相等
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    horizontalReverse(root.left);
    return isSame(root.left, root.right);
}
