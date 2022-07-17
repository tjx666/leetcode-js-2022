const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
]);

/**
 * 思路：
 * 把碰到的字符都 push 到栈中，如果是有效的括号，那么碰到右括号，出栈的一定是左括号
 * 并且遍历到最后栈为空可以确定是个有效的括号
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    for (const char of s) {
        if (!map.has(char)) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (top !== map.get(char)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
