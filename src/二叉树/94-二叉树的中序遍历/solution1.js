/**
 * 思路：
 * 参加工作时长长了以后，更喜欢写逻辑清晰易于理解的解法，对效率反倒不是很看重
 * 递归来处理树的遍历，短小精悍，逻辑清晰，还不容易在处理边界情况时写出 bug
 * 处理边界情况是一种能力的体现，但是实在不理解这有啥可靠的，不就是枚举出各种情况一一处理就好了
 * 不要用一些花里胡哨的奇淫巧技就不容易出错
 * 
 * 时间复杂度：n, 时间复杂度最优也就是 n 了
 * 空间复杂度：h，深度优先都是 h
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    if (root === null) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}
