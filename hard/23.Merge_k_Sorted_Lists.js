/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (!lists.length) {
        return null;
    }
    
    while (lists.length > 1) {
        let list1 = lists.pop();
        let list2 = lists.pop();
        if (!list1 && !list2) {
            continue;
        } else if (!list1) {
            lists.push(list2);
            continue;
        } else if (!list2) {
            lists.push(list1);
            continue;
        }

        const head = list1.val < list2.val ? list1 : list2;
        head === list1 ? list1 = list1.next : list2 = list2.next;

        let cur = head;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
            
            cur = cur.next;
        }

        cur.next = list1 ? list1 : list2;
        lists.push(head); 
    }

    if (!lists.length) {
        return null;
    }

    return lists[0];
};
