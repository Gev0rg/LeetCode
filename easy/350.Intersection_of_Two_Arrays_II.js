/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];

    nums1.forEach( (value1) => {
        const index = nums2.findIndex( (value2) => value1 === value2 );
        if (index !== -1) {
            result.push(value1);
            nums2.splice(index, 1);
        }
    });

    return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const n2 = new Map();
    nums2.forEach( (value) => {
        let finded = n2.get(value);
        if (finded) {
            n2.set(value, ++finded);
        } else {
            n2.set(value, 1);
        }
    })

    const result = [];

    nums1.forEach( (value) => {
        let count = n2.get(value);
        if (count > 0) {
            result.push(value);
            n2.set(value, --count);
        }
    });

    return result;
};
