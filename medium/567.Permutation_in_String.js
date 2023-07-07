/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false;
    }

    if (s2.length === s1.length) {
        return s2.split('').sort().join('') === s1.split('').sort().join('')
                ? true
                : false;
    }

    const s1map = (new Array(26)).fill(0);
    const s2map = (new Array(26)).fill(0);

    for (let i = 0; i < s1.length; ++i) {
        ++s1map[s1.charCodeAt(i) - 'a'.charCodeAt(0)];
        ++s2map[s2.charCodeAt(i) - 'a'.charCodeAt(0)];
    }

    let count = 0;
    for (let i = 0; i < s1map.length; ++i) {
        if (s1map[i] === s2map[i]) {
            ++count;
        }
    }

    for (let i = 0; i < s2.length - s1.length; ++i) {
        if (count === 26) {
            return true;
        }

        const right = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0);
        const left = s2.charCodeAt(i) - 'a'.charCodeAt(0);

        ++s2map[right];
        if (s2map[right] === s1map[right]) {
            ++count;
        } else if (s2map[right] === s1map[right] + 1) {
            --count;
        }

        --s2map[left];
        if (s2map[left] === s1map[left]) {
            ++count;
        } else if (s2map[left] === s1map[left] - 1) {
            --count;
        }
    }

    return count === 26;
};
