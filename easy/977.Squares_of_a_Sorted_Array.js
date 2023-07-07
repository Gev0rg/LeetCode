/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((value) => value ** 2).sort((a, b) => a -b);
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = [];
    let start = 0;
    let end = nums.length - 1;
    let cur = end;

    while (cur > -1) {
        if (Math.abs(nums[start]) < Math.abs(nums[end])) {
            result[cur] = nums[end] ** 2;
            --end;
        } else {
            result[cur] = nums[start] ** 2;
            ++start;
        }

        --cur;
    }

    return result;
};
