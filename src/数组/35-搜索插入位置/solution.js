/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number} target
 * @returns {number}
 */
function binarySearch(nums, left, right, target) {
    if (left > right) return left;

    let midIndex = Math.trunc((left + right) / 2);
    let val = nums[midIndex];

    /// 题目限制了不重复且有序
    if (val === target) return midIndex + 1;

    if (target > val) return binarySearch(nums, midIndex + 1, right, target);

    return binarySearch(nums, left, midIndex - 1, target);
}

/**
 * 二分法
 * 时间复杂度：logn
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    return binarySearch(nums, 0, nums.length, target);
}

console.log(searchInsert([0], 1));
console.log(searchInsert([0], -1));
console.log(searchInsert([0, 3], 1));
console.log(searchInsert([0, 2, 3], 1));
