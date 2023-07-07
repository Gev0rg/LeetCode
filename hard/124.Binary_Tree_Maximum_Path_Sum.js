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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;

    const getSum = (node) => {
        if (!node) {
            return 0;
        }

        const left = getSum(node.left);
        const right = getSum(node.right);

        const res = Math.max(node.val, node.val + Math.max(left, right));
        max = Math.max(max, res, left + right + node.val);

        return res;
    }

    getSum(root);
    return max;
};
