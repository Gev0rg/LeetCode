/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    if (s.length < p.length) {
        return result;
    }

    const charsP = (new Array(26)).fill(0);
    const charsS = (new Array(26)).fill(0);
    let count = 0;

    for (let i = 0; i < p.length; ++i) {
        ++charsP[p.charCodeAt(i) - 'a'.charCodeAt(0)];
        ++charsS[s.charCodeAt(i) - 'a'.charCodeAt(0)];
    }

    for (let i = 0; i < charsP.length; ++i) {
        if (charsP[i] === charsS[i]) {
            ++count;
        }
    }

    for (let i = 0; i < s.length - p.length; ++i) {
        if (count === 26) {
            result.push(i);
        }

        const right = s.charCodeAt(i + p.length) - 'a'.charCodeAt(0);
        const left = s.charCodeAt(i) - 'a'.charCodeAt(0);

        ++charsS[right];
        if (charsS[right] === charsP[right]) {
            ++count;
        } else if (charsS[right] === charsP[right] + 1) {
            --count;
        }

        --charsS[left];
        if (charsS[left] === charsP[left]) {
            ++count;
        } else if (charsS[left] === charsP[left] - 1) {
            --count;
        }
    }

    if (count === 26) {
        result.push(s.length - p.length);
    }

    return result;
};
