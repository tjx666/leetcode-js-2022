/**
 * 思路：
 * 先做 414-第三大的树，这里是先遍历一遍过滤出了数字字符
 * 两次遍历其实可以合并成一次循环，但其实效率一样
 * 时间复杂度：n
 * 空间复杂度：s.length
 * @param {string} s
 * @return {number}
 */
function secondHighest(s) {
    const nums = s.split('').filter((c) => {
        const codePoint = c.codePointAt(0);
        return codePoint >= 49 && codePoint <= 57;
    });
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val > first) {
            second = first;
            first = val;
        } else if (val > second && val !== first) {
            second = val;
        } 
    }

    return second === -Infinity ? -1 : second;
}
