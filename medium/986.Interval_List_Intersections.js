/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < firstList.length && j < secondList.length) {
        const startI = firstList[i][0];
        const startJ = secondList[j][0];
        const endI = firstList[i][1];
        const endJ = secondList[j][1];

        if (endI < startJ) {
            ++i;
            continue;
        }

        if (endJ < startI) {
            ++j;
            continue;
        }

        result.push([Math.max(startI, startJ), Math.min(endI, endJ)]);
        endI < endJ 
            ? ++i 
            : ++j;
    }

    return result;
};
