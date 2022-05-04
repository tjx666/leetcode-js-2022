/**
 * 思路：使用先进先出的队列
 * 时间复杂度：n
 * 空间复杂度：树宽，
 * @param {TreeNode} root
 * @return {number[][]}
 */
 function levelOrderBottom(root) {
    if (root === null) return [];

    const result = [];
    const queue = [root];

    while (queue.length !== 0) {
        const level = [];
        const levelWidth = queue.length;
        for (let i = 0; i < levelWidth; i++) {
            const front = queue.shift();
            level.push(front.val);
            if (front.left) {
                queue.push(front.left);
            }
            if (front.right) {
                queue.push(front.right);
            }
        }
        result.unshift(level);
    }
    return result;
}
