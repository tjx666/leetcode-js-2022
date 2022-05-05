/**
 * 思路：就像查找数组中最大的数一样，可以一遍遍历一遍更新第一，第二，第三大的数
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    if (nums.length <= 2) return Math.max(...nums);

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val > first) {
            third = second;
            second = first;
            first = val;
        } else if (val > second && val !== first) {
            third = second;
            second = val;
        } else if (val > third && val !== second && val !== first) {
            third = val;
        }
    }

    return third === -Infinity ? first : third;
}
