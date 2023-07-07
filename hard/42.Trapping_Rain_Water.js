/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;

    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        result += leftMax < rightMax 
                    ? leftMax - height[left++] 
                    : rightMax - height[right--];
    }

    return result;
};
