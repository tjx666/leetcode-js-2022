/**
 * 时间复杂度：m * n, m 为 strs 长度， n 为 strs 中最短字符串长度
 * 空间复杂度：常数级
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let minLengthIndex = 0;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < strs[minLengthIndex].length) {
            minLengthIndex = i;
        }
    }
    const shortestStr = strs[minLengthIndex];
    let common = shortestStr;
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        for (let j = 0; j < common.length; j++) {
            if (common[j] !== str[j]) {
                common = common.slice(0, Math.max(j, 0));
                if (common.length === 0) return '';
            }
        }
    }
    return common;
}
