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
var sumOfLeftLeaves = function(root) {
    return !root 
            ? 0 
            : (root.left && !root.left.left && !root.left.right
                ? root.left.val
                : 0) 
                + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    const stack = [{ node: root, isLeft: false }];
    let sum = 0;

    while (stack.length > 0) {
        const cur = stack.pop();

        if (!cur.node) {
            continue;
        }

        if (!cur.node.left && !cur.node.right && cur.isLeft) {
            sum += cur.node.val;
        } else {
            stack.push(
                        { node: cur.node.left, isLeft: true }, 
                        { node: cur.node.right, isLeft: false }
                        );
        }
    }

    return sum
};
