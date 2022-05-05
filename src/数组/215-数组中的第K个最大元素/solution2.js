/**
 * 思路：借鉴第 3 大的数那道题，其实就是插入排序
 * 时间复杂度：n * k, n 为 nums 数组长度
 * 空间复杂度：k
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    if (nums.length === k) return Math.min(...nums);

    const sortedK = new Array(k).fill(-Infinity);
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        let j = 0;
        for (; j < k; j++) {
            if (val > sortedK[j]) {
                break;
            }
        }

        if (j !== k) {
            for (let m = k - 1; m > j; m--) {
                sortedK[m] = sortedK[m - 1];
            }
            sortedK[j] = val;
        }
    }

    return sortedK[k - 1];
}
