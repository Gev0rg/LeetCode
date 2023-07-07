/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const getResult = (right, left, operation) => {
        switch (operation) {
            case '+': 
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                return Math.trunc(left / right);
        }
    }

    const stack = [];

    tokens.forEach( (token) => {
        if (parseInt(token) || parseInt(token) === 0) {
            stack.push(token);
        } else {
            stack.push(`${getResult(parseInt(stack.pop()), parseInt(stack.pop()), token)}`);
        }
    });

    return stack.pop();
};
