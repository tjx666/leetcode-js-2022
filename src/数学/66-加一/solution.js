/**
 * 思路：可能会发生变化的元素只有最后面连续的 9 所在的元素和它们前一位
 * 时间复杂度：n
 * 空间复杂度：常数级
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        const val = digits[i];

        if (val === 9) {
            digits[i] = 0;
        } else {
            digits[i] = val + 1;
            return digits;
        }
    }

    digits.unshift(1);
}
