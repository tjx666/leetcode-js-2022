/**
 * 思路：模拟
 * 时间复杂度：log10 x
 * 空间复杂度：0
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0) return false;

    if (x < 10) return true;

    if (x < 100) return x % 11 === 0;

    const bitCount = Math.trunc(Math.log10(x)) + 1;
    const halfBitCount = Math.trunc(bitCount / 2);
    let left = x;
    let right = 0;
    for (let i = 0; i < halfBitCount; i++) {
        const lastNumber = left % 10;
        left = Math.trunc(left / 10);
        right = right * 10 + lastNumber;
    }

    if (bitCount % 2 !== 0) {
        left = Math.trunc(left / 10);
    }
    return left === right;
}
