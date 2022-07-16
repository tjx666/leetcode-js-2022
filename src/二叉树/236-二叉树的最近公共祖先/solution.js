/**
 * @param {TreeNode} root
 * @param {number} val
 * @returns {TreeNode[] | null}
 */
function getPathToNode(root, val) {
    if (root === null) return null;

    const path = [];
    let result;

    function dfs(node) {
        if (node === null || result !== undefined) return;

        if (node.val === val) {
            result = [...path, node];
            return;
        }

        path.push(node);
        dfs(node.left);
        path.pop();

        path.push(node);
        dfs(node.right);
        path.pop();
    }

    dfs(root);

    return result;
}

/**
 * 思路：获取根节点到俩节点的路径，从前往后遍历，最后一个相同的节点就是最近公共父节点
 *
 * 题目限制：
 *   树中节点数目在范围 [2, 105] 内。
 *   -109 <= Node.val <= 109
 *   所有 Node.val 互不相同 。
 *   p != q
 *   p 和 q 均存在于给定的二叉树中。
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    const pPath = getPathToNode(root, p.val);
    const qPath = getPathToNode(root, q.val);

    const shorterLength = Math.min(pPath.length, qPath.length);
    let lastSameNode;
    for (let i = 0; i < shorterLength; i++) {
        if (pPath[i].val !== qPath[i].val) {
            return lastSameNode;
        } else {
            lastSameNode = pPath[i];
        }
    }

    return lastSameNode;
}

const root = {
    val: 3,
    left: {
        val: 5,
        left: null,
        right: null,
    },
    right: {
        val: 1,
        left: null,
        right: null,
    },
};

console.log(lowestCommonAncestor(root, root.left, root.right));