/**
 * 使用回溯法避免将 path 作为递归参数, 将空间复杂度压到树高
 * 时间复杂度： n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
    if (root === null) return [];

    const path = [];
    const result = [];

    /**
     * @param {TreeNode} node
     */
    function dfs(node, rest) {
        const isLeaf = node.left === null && node.right === null;
        if (isLeaf) {
            if (rest === node.val) {
                result.push([...path, node.val]);
            }
            return;
        } else {
            rest -= node.val;

            if (node.left) {
                path.push(node.val);
                dfs(node.left, rest);
                path.pop();
            }

            if (node.right) {
                path.push(node.val);
                dfs(node.right, rest);
                path.pop();
            }
        }
    }

    dfs(root, targetSum);
    return result;
}
