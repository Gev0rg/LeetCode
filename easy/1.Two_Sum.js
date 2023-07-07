/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    nums.forEach((value, index) => {
        if (numsMap.has(value)) {
            numsMap.get(value).push(index);
        } else {
            numsMap.set(value, [index]);
        }
    })

    for (let i = 0; i < nums.length; ++i) {
        const second_index = numsMap.get(target - nums[i]);

        if (second_index) {
            for (let j = 0; j < second_index.length; ++j) {
            if (second_index[j] !== i) {
                    return [i, second_index[j]];
                }
            }
        }
    }
};
