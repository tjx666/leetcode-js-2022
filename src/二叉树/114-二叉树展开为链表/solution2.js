/**
 *  思路：非递归前序遍历
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    if (root === null) return;

    let current = root;
    const stack = [];

    let previous;
    while (current || stack.length) {
        if (current === null) {
            current = stack.pop();
            previous.right = current;
        }

        const { left, right } = current;

        if (left) {
            current.right = left;
            current.left = null;
        }

        if (right) {
            stack.push(right);
        }

        previous = current;
        current = left;
    }
}
