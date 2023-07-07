/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const result = [...intervals].sort( (a, b) => a[0] - b[0] );;
    // [----]
    //  [--]
    //   [----]
    //          [---]
    for (let i = 1; i < result.length; ++i) {
        if (result[i][1] <= result[i - 1][1]) {
            result.splice(i, 1);
            --i;
        } else if (result[i][0] <= result[i - 1][1]) {
            result[i - 1] = [ result[i - 1][0], result[i][1] ];
            result.splice(i, 1);
            --i;
        }
    }

    return result;
};
