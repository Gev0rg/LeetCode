/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const positionsOfOne = [];

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === '1') {
                positionsOfOne.push([i, j]);
            }
        }
    }

    positionsOfOne.sort( (a, b) => a[0] + a[1] - b[0] - b[1] );
    console.log(positionsOfOne)
    for (let i = positionsOfOne.length - 1; i > 0; --i) {
        if (positionsOfOne[i][0] === positionsOfOne[i - 1][0]) {
            if (Math.abs(positionsOfOne[i][1] - positionsOfOne[i - 1][1]) === 1) {
               positionsOfOne.splice(i, 1);
            }
        } else if (positionsOfOne[i][1] === positionsOfOne[i - 1][1]) {
            if (Math.abs(positionsOfOne[i][0] - positionsOfOne[i - 1][0]) === 1) {
               positionsOfOne.splice(i, 1);
            }
        }
    }

    return positionsOfOne.length;
};
