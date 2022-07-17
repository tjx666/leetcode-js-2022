/** @type {Array<[string, number]>} */
const map = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['III', 3],
    ['II', 2],
    ['I', 1],
];

/**
 * 思路：直接查表，模拟罗马数转整数的过程
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    let result = 0;
    while (s) {
        for (const [roman, integer] of map) {
            if (s.startsWith(roman)) {
                result += integer;
                s = s.slice(roman.length);
            }
        }
    }
    return result;
}
