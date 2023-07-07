/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let curLength = 0;
    let start = 0;
    const charStore = new Map();

    for (let i = 0; i < s.length; ++i) {
        while (charStore.has(s[i])) {
            charStore.delete(s[start++]);
            --curLength;
        }

        charStore.set(s[i], 1);
        ++curLength;

        maxLength = Math.max(maxLength, curLength);
    }

    return maxLength;
};
