/**
 * 示例：按照前序遍历特点直接遍历即可，可以使用数组存放暂时没遍历到的右节点
 * 时间复杂度：n
 * 空间复杂度：h
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
    if (root === null) return [];

    const list = [root];
    const result = [];
    while (list.length !== 0) {
        const front = list.shift();
        result.push(front.val);

        if (front.right !== null) {
            list.unshift(front.right);
        }

        if (front.left !== null) {
            list.unshift(front.left);
        }
    }
    return result;
}

/*
        1
    4       3
2
*/

function main() {
    const root = {
        val: 1,
        left: {
            val: 4,
            left: {
                val: 2,
            },
            right: {
                val: 3,
            },
        },
    };

    preorderTraversal(root);
}

main();
