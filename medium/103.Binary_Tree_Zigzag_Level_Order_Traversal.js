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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const result = [];

    if (!root) {
        return result;
    }

    const stack = [root];
    let toLeft = false;

    while (stack.length > 0) {
        const level = [];
        const res = []
        while (stack.length > 0) {
            level.push(stack.pop());
            if (level[level.length - 1]) {
                res.push(level[level.length - 1].val)
            }
        }
        
        if (res.length > 0) {
            result.push(res);
        }

        for (let i = 0; i < level.length; ++i) {
            if (!level[i]) {
                continue;
            }

            if (toLeft) {
                stack.push(level[i].right, level[i].left);
            } else {
                stack.push(level[i].left, level[i].right)
            }
        }

        toLeft = !toLeft;
    }

    return result;
};
