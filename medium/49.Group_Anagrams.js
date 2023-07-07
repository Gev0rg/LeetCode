/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = new Map();

    strs.forEach( (str) => {
        const sorted = str.split('').sort().join('');
        if (groups.has(sorted)) {
            console.log(groups.get(sorted))
            groups.set(sorted, groups.get(sorted).concat(str));
        } else {
            console.log([].push(str))
            groups.set(sorted, [str]);
        }
    });

    return [...groups.values()];
};
