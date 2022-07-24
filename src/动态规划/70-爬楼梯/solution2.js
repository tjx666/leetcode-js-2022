/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n === 1) return 1;

    if (n === 2) return 2;

    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}

console.log(climbStairs(45));
