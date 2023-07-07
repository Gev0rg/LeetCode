/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const getParent = (node) => {
        if (!node) {
            return null;
        }

        if (node === p || node === q) {
            return node;
        }

        const left = getParent(node.left);
        const right = getParent(node.right);

        if (left === p && right === q || left === q && right === p) {
            return node;
        }

        if (left) {
            return left;
        }

        if (right) {
            return right;
        }

        return null;
    }

    return getParent(root);
};
