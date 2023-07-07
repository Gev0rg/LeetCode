/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const sums = new Map([[0, 1]]);
    let sum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        if (sums.has(sum - k)) {
            count += sums.get(sum - k);
        }
        sums.set(sum, sums.has(sum) ? sums.get(sum) + 1 : 1);
    }
    
    return count;
};
