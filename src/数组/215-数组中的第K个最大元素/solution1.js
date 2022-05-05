/**
 * 思路：排序
 * 时间复杂度：nlogn，取决于排序算法
 * 空间复杂度：如果允许修改原数组上就是 1
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    if (nums.length <= k) return Math.min(...nums);
    const sortedNums = [...nums].sort((a, b) => b - a);
    return sortedNums[k - 1];
}
