/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const OPEN = ['(', '{', '['];
    const CLOSE = [')', '}', ']'];
    const arrFromStr = s.split('');

    for (let i = 0; i < arrFromStr.length; ++i) {
        const index = CLOSE.findIndex((v) => v === arrFromStr[i]);

        if (index === -1) {
            continue;
        }

        if (arrFromStr[i - 1] !== OPEN[index]) {
            return false;
        }

        arrFromStr.splice(i - 1, 2);
        i = i - 2;
    }

    if (arrFromStr.length) {
        return false;
    }

    return true;
};
