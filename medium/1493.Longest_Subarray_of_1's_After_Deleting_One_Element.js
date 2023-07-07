/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const zeros = [];
    nums.forEach( (value, index) => value ? undefined : zeros.push(index) );

    if (zeros.length < 2) {
        return nums.length - 1; 
    }

    zeros.unshift(-1);
    zeros.push(nums.length);

    let res = 0;

    for (let i = 0; i < zeros.length - 2; ++i) {
        res = Math.max(res, zeros[i + 2] - zeros[i] - 2);
    }

    return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeroCount = 0;
    let longestSubarray = 0;
    let start = 0;
    
    for (let i = 0; i < nums.length; ++i) {
        zeroCount += nums[i] ? 0 : 1;

        while (zeroCount > 1) {
            zeroCount -= nums[start] ? 0 : 1;
            ++start;
        }

        longestSubarray = Math.max(longestSubarray, i - start);
    }

    return longestSubarray;
};
