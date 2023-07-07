/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head;
    let count = 0;
    while (node) {
        ++count;
        node = node.next;
    }

    node = head;
    let prev = node;
    let i = 0;
    while (i + n < count) {
        prev = node;
        node = node.next;
        ++i;
    }

    if (prev === node) {
        head = head.next;
    } else {
        prev.next = prev.next ? prev.next.next : null;
    }

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const list = [];
    let node = head;

    while (node) {
        list.push(node);
        node = node.next;
    }

    if (list.length - 1 - n < 0) {
        return list[1] ?? null;
    }

    list[list.length - 1 - n].next = list[list.length - 1 - n].next.next;

    return list[0];
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let prev = head;
    let last = head;
    let i = n;

    while (i > 0) {
        last = last.next;
        --i;
    }

    if (!last) {
        return prev.next;
    }

    while (last.next) {
        prev = prev.next;
        last = last.next;
    }

    prev.next = prev.next.next

    return head;
};
