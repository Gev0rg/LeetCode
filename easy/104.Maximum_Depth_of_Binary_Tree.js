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
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    if (leftDepth > rightDepth) {
        return 1 + leftDepth;
    } else {
        return 1 + rightDepth;
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
 * @return {number}
 */
var maxDepth = function(root) {
    const stack = [ { node: root, isChecked: false } ];
    let maxDep = 0;
    let curDep = 0;

    while (stack.length > 0) {
        const curNode = stack.pop();
        if (!curNode.node) {
            continue;
        }
        if (curNode.isChecked) {
            --curDep;
            continue;
        }

        ++curDep;

        if (!(curNode.node.left || curNode.node.right)) {
            maxDep = Math.max(maxDep, curDep);
            --curDep;
            continue;
        }

        stack.push({ node: curNode.node, isChecked: true })
        if (curNode.node.right) {
            stack.push({ node: curNode.node.right, isChecked: false });
        }
        if (curNode.node.left) {
            stack.push({ node: curNode.node.left, isChecked: false });
        }
    }

    return maxDep;
};
