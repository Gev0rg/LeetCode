/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arrFromString = s.toLowerCase().split('');

    for (let i = 0; i < arrFromString.length; ++i) {
        const codeOfChar = arrFromString[i].codePointAt(0);

        if (!(codeOfChar > 47 && codeOfChar < 58 || codeOfChar > 96 && codeOfChar < 123)) {
            arrFromString.splice(i, 1);
            --i;
        }
    }

    return arrFromString.join('') === arrFromString.reverse().join('');
};
