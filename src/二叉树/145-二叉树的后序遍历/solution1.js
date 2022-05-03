/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
    if (root === null) return [];
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
}
