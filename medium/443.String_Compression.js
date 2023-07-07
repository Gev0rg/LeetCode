/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let prev = chars[0];
    let count = 1;
    let cur = 1;

    for (let i = 1; i < chars.length; ++i) {
        if (chars[i] === prev) {
            ++count;
            continue;
        }

        if (count > 1) {
            `${count}`.split('').forEach( (s) => chars[cur++] = s );
            count = 1;
        }

        prev = chars[i];
        chars[cur++] = prev;
    }

    if (count > 1) {
        `${count}`.split('').forEach( (s) => chars[cur++] = s );
    }
    chars.length = cur;

    return chars.length;
};
