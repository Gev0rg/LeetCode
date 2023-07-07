/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let overflow = 0;
    const numbers = [];

    const getSum = (node1, node2) => {
        const sum = (node1 ? node1.val : 0) + (node2 ? node2.val : 0) + overflow;

        if (!node1 && !node2) {
            if (sum) {
                numbers.push(sum % 10);
            }
            return;
        }

        overflow = Math.floor(sum / 10);
        numbers.push(sum % 10);
        getSum(node1 ? node1.next : node1, node2 ? node2.next : node2);
    }

    getSum(l1, l2);

    const root = new ListNode(numbers[0]);
    let node = root;

    for (let i = 1; i < numbers.length; ++i) {
        node.next = new ListNode(numbers[i]);
        node = node.next;
    }

    return root;
};
