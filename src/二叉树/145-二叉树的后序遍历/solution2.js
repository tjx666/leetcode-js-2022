/**
 * 思路：
 * 后序遍历是：left -> right -> root
 * 如果我们反过来：root -> right -> left 遍历，得到遍历结果 result，具体遍历算法参考前序遍历
 * 把 result 再翻转一下就是后序遍历的结果
 * 
 * 缺点：只是结果是一样，但是并不是按照后序遍历的顺序遍历的
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
    if (root === null) return [];

    const list = [root];
    const result = [];
    while (list.length !== 0) {
        const front = list.shift();
        result.push(front.val);

        if (front.left !== null) {
            list.unshift(front.left);
        }

        if (front.right !== null) {
            list.unshift(front.right);
        }
    }
    return result.reverse();
}
