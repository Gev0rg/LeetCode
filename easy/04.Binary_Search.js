/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length;
    let mid = Math.floor(start + (end - start - 1) / 2);

    while (start < end) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid;
        }

        mid = Math.floor(start + (end - start - 1) / 2);
    }

    return -1;
};
