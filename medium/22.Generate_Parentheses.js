/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const getCombinations = (val, openCount, closeCount) => {
        let result = [];

        if (openCount + closeCount === 2 * n) {
            result.push(val);
            return result;
        }

        if (openCount < n) {
            result = [...result, ...getCombinations(val + '(', openCount + 1, closeCount)];
        }

        if (closeCount < openCount) {
            result = [...result, ...getCombinations(val + ')', openCount, closeCount + 1)];
        }

        return result;
    }

    return getCombinations('', 0, 0)
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const tree = getNode(0, 0, '', true, n);
    return getLeaves(tree);
};

var getNode = function(countLeft, countRight, parentVal, isLeft, limit) {
    isLeft ? ++countLeft : ++countRight;
    const val = `${parentVal}` + `${isLeft ? '(' : ')'}`;

    const node = { 
        val, 
        left: countLeft < limit ? getNode(countLeft, countRight, val, true, limit) : null,
        right: countRight < countLeft ? getNode(countLeft, countRight, val, false, limit) : null,   
    }

    return node;
}

var getLeaves = function(node) {
    if (!node) {
        return []
    }
    if (!node.left && !node.right) {
        return [node.val];
    }

    return [].concat(getLeaves(node.left), getLeaves(node.right));
}
