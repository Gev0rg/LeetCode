/*
* @param {string} path
* @return {string}
*/
var simplifyPath = function(path) {
    const arrPath = path.split('/').filter( (s) => s !== '' && s !== '.' );
    const stack = [];
 
    arrPath.forEach( (s) => {
        if (s === '..') {
            stack.pop();
        } else {
            stack.push(s);
        }
    });
 
    const result = stack.reduce( (res, s) => res += '/' + s, '');
 
    return result || '/';
};

/*
* @param {string} path
* @return {string}
*/
var simplifyPath = function(path) {
    const arrPath = path.split('/');
    
    for (let i = 1; i < arrPath.length; ++i) {
        if (arrPath[i] === '' || arrPath[i] === '.') {
            arrPath.splice(i, 1);
            --i;
        } else if (arrPath[i] === '..') {
            arrPath.splice(i - 1 > 0 ? i - 1 : 0, i - 1 > 0 ? 2 : 1);
            i = i - 2;
        }
    }
 
    const result = arrPath.join('/');
 
    return result[0] === '/' ? result : '/' + result;
};
