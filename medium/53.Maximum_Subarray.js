

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;

    nums.forEach( (num) => {
        sum += num;
        max = Math.max(max, sum);
        if (sum <= 0) {
            sum = 0;
        }
    });

    return max;
};
