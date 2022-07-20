/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    // 表示最后一个不同的数字的下标
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            nums[slow + 1] = nums[fast];
            slow++;
        }
    }

    return slow + 1;
}
