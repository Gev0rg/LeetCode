/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const chars = new Map();
    for (let i = 0; i < s.length; ++i) {
        chars.set(s[i], i);
    }

    const result = [];
    let first = 0
    let last = 0;
    for (let i = 0; i < s.length; ++i) {
        last = Math.max(last, chars.get(s[i]));
        if (i === last) {
            result.push(last - first + 1);
            first = last + 1;
        }
    }

    return result;
};

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const chars = new Map();

    for (let i = 0; i < s.length; ++i) {
        if (!chars.has(s[i])) {
            chars.set(s[i], [i, i]);
        } else {
            chars.set(s[i], [chars.get(s[i])[0], i]);
        }
    }

    const ranges = Array.from(chars.values());
    const stack = [];

    ranges.forEach( (cur) => {
        if (!stack.length) {
            stack.push(cur);
        } else {
            const prev = stack.pop();
            if (prev[1] < cur[0]) {
                stack.push(prev, cur);
            } else {
                stack.push([prev[0], Math.max(prev[1], cur[1])]);
            }
        }
    });

    return stack.map( (range) => range[1] - range[0] + 1 );
};
