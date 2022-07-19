/**
 * 思路：空间换时间，用 Map 存储遍历过的数据
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (map.has(val)) return [map.get(val), i];

        map.set(target - val, i);
    }
}