/**
 * 思路：递归
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    if (root === null) return;

    function flattenWithReturnLast(node) {
        let right = node.right;

        if (node.left) {
            const last = flattenWithReturnLast(node.left);
            node.right = node.left;
            node.left = null;
            last.right = right;
            if (right) {
                return flattenWithReturnLast(right);
            } else {
                return last;
            }
        } else if (right) {
            return flattenWithReturnLast(right);
        }

        return node;
    }

    flattenWithReturnLast(root);
}


