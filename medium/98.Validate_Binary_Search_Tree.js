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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const isValid = (node, leftLimit, rightLimit) => {
        if (!node) {
            return true;
        }

        if (
                node.right && (rightLimit <= node.right.val || node.right.val <= node.val)
            ||  node.left && (node.val <= node.left.val || node.left.val <= leftLimit)
        ) {
            return false;
        }

        return isValid(node.left, leftLimit, node.val) && isValid(node.right, node.val, rightLimit);
    };
    
    return isValid(root, -Infinity, Infinity);
};
