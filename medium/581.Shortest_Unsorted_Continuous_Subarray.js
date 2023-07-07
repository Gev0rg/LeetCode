/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let start = 0;

    while (start < nums.length - 1 && nums[start] < nums[start + 1]) {
        ++start;
    }

    if (start === nums.length - 1) {
        return 0;
    }

    let min = nums[start + 1];
    let max = nums[start];
    let end = start;

    for (let i = start + 1; i < nums.length; ++i) {
        if (nums[i] < max) {
            end = i + 1;
            min = Math.min(min, nums[i]);
        } else {
            max = nums[i];
        }
    }

    start = 0;

    while (start < end && nums[start] <= min) {
        ++start;
    }

    return end - start;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let min = nums[nums.length - 1];
    let max = nums[0];
    let left = -1;
    let right = -1;

    for (let i = 1; i < nums.length; ++i) {
        nums[i] >= max ? max = nums[i] : right = i + 1;
        nums[nums.length - 1 - i] <= min ? min = nums[nums.length - 1 - i] : left = nums.length - 1 - i;
    }

    return right - left;
};
