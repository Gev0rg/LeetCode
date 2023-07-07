/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    let prev = 101;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== prev) {
            prev = nums[i];
            nums[count++] = nums[i];
        }
    }

    return count;
};
