/**
 * 约束条件：
 * 树中节点的数目在范围 [1, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 思路：dfs + 回溯
 * 时间复杂度：介于 n 到 n平方
 * 空间复杂度：h，递归深度
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
    const result = [];

    /**
     * @param {TreeNode} node
     * @param {string[]} path
     */
    function traverse(node, path) {
        if (node.left === null && node.right === null) {
            result.push([...path, node.val].join('->'));
            return;
        }

        if (node.left) {
            path.push(node.val);
            traverse(node.left, path);
            path.pop();
        }

        if (node.right) {
            path.push(node.val);
            traverse(node.right, path);
            path.pop();
        }
    }

    traverse(root, []);

    return result;
}
