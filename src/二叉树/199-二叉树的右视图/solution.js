/**
 * 思路：层序遍历，去每一层最右边的
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
    if (root === null) return [];

    const queue = [root];
    const result = [];

    while (queue.length) {
        const currentLevelLength = queue.length;
        for (let i = 0; i < currentLevelLength; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            if ((i === currentLevelLength - 1)) {
                result.push(node.val);
            }
        }
    }

    return result;
}

rightSideView({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null
        }
    }
})
