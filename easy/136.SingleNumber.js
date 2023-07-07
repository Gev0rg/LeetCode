/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const countArr = new Array(60001);
    countArr.fill(0)

    nums.forEach( (value) => ++countArr[value + 30000] );
    
    for (let i = 0; i < countArr.length; ++i) {
        if (countArr[i] === 1) {
            return i - 30000;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set();

    nums.forEach( (value) => {
        if (set.has(value)) {
            set.delete(value);
        } else {
            set.add(value);
        }
    });
    
    return [...set][0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    nums.forEach( (value) => result ^= value );

    return result;
};
