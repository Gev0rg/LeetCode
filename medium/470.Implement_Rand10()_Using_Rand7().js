/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
    while(true) {
        let a = rand7();
        let b = rand7();
        let index = (a - 1) * 7 + b;
        if (index <= 40) {
            return index % 10 + 1;
        }

        a = index - 40;
        b = rand7();
        index = (a - 1) * 7 + b;
        if (index <= 60) {
            return index % 10 + 1;
        }

        a = index - 60;
        b = rand7();
        index = (a - 1) * 7 + b;
        if (index <= 20) {
            return index % 10 + 1;
        }
    }
};
