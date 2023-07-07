/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        const mid1 = Math.floor((left + right) / 2);
        const mid2 = Math.floor((nums1.length + nums2.length + 1) / 2 - mid1);

        const maxLeft1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
        const minRight1 = mid1 === nums1.length ? Infinity : nums1[mid1];
        const maxLeft2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
        const minRight2 = mid2 === nums2.length ? Infinity : nums2[mid2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((nums1.length + nums2.length) % 2) {
                return Math.max(maxLeft1, maxLeft2);
            } else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            }
        } else if (maxLeft1 > minRight2) {
            right = mid1 - 1;
        } else {
            left = mid1 + 1;
        }
    }
    
    return -1;
};
