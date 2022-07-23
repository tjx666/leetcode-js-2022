/**
 * 思路：层序遍历，队列，最先遍历到的叶子节点深度就是最小深度
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
    if (root === null) return 0;

    let queue = [root];
    let minDepth = 1;

    while (queue.length) {
        const currentLevelLength = queue.length;

        for (let i = 0; i < currentLevelLength; i++) {
            const front = queue.shift();
            const isLeaf = front.left === null && front.right === null;
            if (isLeaf) return minDepth;

            if (front.left) {
                queue.push(front.left);
            }

            if (front.right) {
                queue.push(front.right);
            }
        }

        minDepth++;
    }

    return minDepth;
}
