/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const result = Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i > - 1; --i) {
        const n1 = num1.charCodeAt(i) - '0'.charCodeAt(0);
        for (let j = num2.length - 1; j > - 1; --j) {
            const sum = n1 * (num2.charCodeAt(j) - '0'.charCodeAt(0)) + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.trunc(sum / 10);
        }
    }

    const start = result.findIndex( (value) => value );
    if (start < 0) {
        return '0';
    }
    
    let answer = '';
    for (let i = start; i < result.length; ++i) {
        answer += `${result[i]}`;
    }

    return answer;
};
