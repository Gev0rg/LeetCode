/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) {
        return 0;
    }

    if (root.val < low) {
        return rangeSumBST(root.right, low, high);
    } else if (root.val > high) {
        return rangeSumBST(root.left, low, high);
    } else {
        return root.val + rangeSumBST(root.right, low, high) + rangeSumBST(root.left, low, high);
    }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        if (node) {
            if (node.val < high) {
                stack.push(node.right);
            }

            if (node.val > low) {
                stack.push(node.left);
            }

            if (node.val >= low && node.val <= high) {
                sum += node.val;
            }
        }
    }

    return sum;
};
