/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (!nums[i]) {
            nums.splice(i, 1);
            ++zeroCount;
            --i;
        }
    }

    for (let i = 0; i < zeroCount; ++i) {
        nums.push(0);
    }
};
