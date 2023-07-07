/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]; 
        } else if (numbers[left] + numbers[right] < target) {
            ++left;
        } else {
            --right;
        }
    }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const nums = new Map();
    for (let i = 0; i < numbers.length; ++i) {
        if (nums.has(target - numbers[i])) {
            return [nums.get(target - numbers[i]) + 1, i + 1];
        } else {
            nums.set(numbers[i], i);
        }
    }
};
