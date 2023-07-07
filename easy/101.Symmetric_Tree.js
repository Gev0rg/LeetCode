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
var isSymmetric = function(root) {
    isSym = (first, second) => {
        if (!(first || second)) {
            return true;
        }

        if (!first || !second || first.val !== second.val) {
            return false;
        }

        return isSym(first.left, second.right) && isSym(first.right, second.left);
    }

    return isSym(root.left, root.right);
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const stack = [root.left, root.right];

    while (stack.length > 0) {
        const first = stack.pop();
        const second = stack.pop();

        if (!(first || second)) {
            continue;
        }

        if (!first || !second || first.val !== second.val) {
            return false;
        }

        stack.push(first.left, second.right, first.right, second.left);
    }

    return true;
};
