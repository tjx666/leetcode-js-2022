/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    let result = '';
    let carry = 0;
    for (
        let i = 1,
            length1 = num1.length,
            length2 = num2.length,
            longerLength = Math.max(length1, length2);
        i <= longerLength;
        i++
    ) {
        const n1 = num1[length1 - i];
        const n2 = num2[length2 - i];
        const temp =
            (n1 === undefined ? 0 : Number.parseInt(n1, 10)) +
            (n2 === undefined ? 0 : Number.parseInt(n2, 10))  + 
        carry;
        carry = temp >= 10 ? 1 : 0;
        result = `${temp % 10}${result}`;
    }

    if (carry === 1) {
        result = `1${result}`;
    }

    return result;
}

addStrings('456', '77');
