/**
 * 递归遍历，注意可以通过当前深度大于最小深度来剪枝
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
    if (root === null) return 0;
    
    let minDepth = Infinity;

    /**
     * @param {TreeNode} node
     * @param {number} depth
     */
    function dfs(node, depth) {
        if (depth >= minDepth) return;

        const isLeaf = node.left === null && node.right === null;
        if (isLeaf) {
            minDepth = depth;
            return;
        }

        if (node.left) {
            dfs(node.left, depth + 1);
        }

        if (node.right) {
            dfs(node.right, depth + 1);
        }
    }

    dfs(root, 1);

    return minDepth;
}
