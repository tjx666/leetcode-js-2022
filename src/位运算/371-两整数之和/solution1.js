/**
 * 思路：
 * 位运算基本特性
 * 两数异或结果未没有加上进位的结果
 * 两数与操作结果在坐进位结果为两数相加的进位部分
 * 时间复杂度：1，最大为这个数的二进制位数
 * 空间复杂度：1
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
    let sum = a ^ b;
    let carry = (a & b) << 1;
    while (carry !== 0) {
        const newCarry = (sum & carry) << 1;
        sum ^= carry;
        carry = newCarry;
    }
    return sum;
}
