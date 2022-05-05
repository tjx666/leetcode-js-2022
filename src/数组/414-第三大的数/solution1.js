/**
 * 思路：排序
 * 时间复杂度：nlogn，取决于排序算法
 * 空间复杂度：如果允许修改原数组上就是 1
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    if (nums.length <= 1) return Math.max(...nums);

    const sortedNums = [...nums].sort((a, b) => b - a);
    for (let i = 1, j = 1; i < sortedNums.length; i++) {
        if (sortedNums[i] !== sortedNums[i - 1]) {
            j++;
            if (j === 3) {
                return sortedNums[i];
            }
        }
    }
    return sortedNums[0];
}
