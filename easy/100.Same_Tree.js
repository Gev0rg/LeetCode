/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return !p && !q 
            ? true 
            : !p || !q 
                ? false
                : p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const stack = [p, q];

    while (stack.length > 0) {
        const first = stack.pop();
        const second = stack.pop();

        if (!first && !second) {
            continue;
        }

        if (!first || !second || first.val !== second.val) {
            return false;
        }

        stack.push(first.left, second.left, first.right, second.right);
    }

    return true;
};
