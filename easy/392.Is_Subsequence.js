/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (t.indexOf(s) !== -1) {
        return true;
    }

    let prev = -1;

    for (let i = 0; i < s.length; ++i) {
        prev = t.indexOf(s[i], prev + 1);

        if (prev === -1) {
            return false;
        }
    }

    return true;
};
