/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s.length) {
        return 0;
    }

    const romInt = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let prev = romInt[s[0]];
    let int = prev;

    for (let i = 1; i < s.length; ++i) {
        const cur = romInt[s[i]];

        if (cur > prev) {
            int = int + cur - 2 * prev;
        } else {
            int += cur;
        }

        prev = cur;
    }

    return int;
};
