/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) {
        return '';
    }

    if (t.length === s.length && s.split('').sort().join('') === t.split('').sort().join('')) {
        return s;
    }

    let result = s + '$';

    const chars = Array(58).fill(0);
    for (const c of t) {
        chars[c.charCodeAt() - 'A'.charCodeAt()]++;
    }

    for (let i = 0, start = 0, count = t.length; i < s.length; ++i) {
        count -= chars[s.charCodeAt(i) - 'A'.charCodeAt()]-- > 0;
        if (count > 0) {
            continue;
        }

        while (count === 0) {
            count += chars[s.charCodeAt(start++) - 'A'.charCodeAt()]++ === 0;
        }

        if (result.length > i - start + 2) {
            result = s.slice(start - 1, i + 1);
        }
    }

    return result.length > s.length ? '' : result;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) {
        return '';
    }

    if (t.length === s.length && s.split('').sort().join('') === t.split('').sort().join('')) {
        return s;
    }

    const tChars = new Map();
    for (let i = 0; i < t.length; ++i) {
        if (tChars.has(t[i])) {
            tChars.set(t[i], tChars.get(t[i]) + 1);
        } else {
            tChars.set(t[i], 1);
        }
    }

    let result = '';
    let prevStart = -1;
    let start = -1;
    let size = 0;
    const sChars = new Map();
    for (let i = 0; i < s.length; ++i) {
        if (tChars.has(s[i])) {
            if (sChars.has(s[i])) {
                sChars.set(s[i], sChars.get(s[i]) + 1);
            } else {
                sChars.set(s[i], 1);
            }

            if (sChars.get(s[i]) === tChars.get(s[i])) {
                ++size;
            }
        }

        while (size === tChars.size) {
            ++start;
            if (sChars.has(s[start])) {
                if (sChars.get(s[start]) === 1) {
                    sChars.delete(s[start]);
                    --size;
                } else {
                    sChars.set(s[start], sChars.get(s[start]) - 1);
                    if (sChars.get(s[start]) < tChars.get(s[start])) {
                        --size;
                    }
                }
            }
        }

        if (start !== prevStart) {
            const str = s.substring(start, i + 1);
            if (str.length < result.length || !result.length) {
                result = str;
            }

            prevStart = start;
        }
    }
    
    return result;
};
