/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = new Map();

    for (let i = 0; i < s.length; ++i) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; ++i) {
        if (!sMap.get(t[i])) {
            return false;
        }

        sMap.set(t[i], sMap.get(t[i]) - 1);
    }

    for (let e of sMap) {
        if (e[1]) {
            return false;
        }
    }
    
    return true;
};
