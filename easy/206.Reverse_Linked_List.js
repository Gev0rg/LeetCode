/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * iteratively
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prevNode = null;
    let currentNode = head;
    let nextNode;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return prevNode;
};

/**
 * recursively
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) {
      return head;
    }

    const result = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return result;
}
