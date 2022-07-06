/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head;
    let next = null;
    let prev = null;
    
    
    while(cur) {
        if(cur.val === val) {
            if(!prev) {
                cur = cur.next;
                head = cur;
                continue;
            }
            next = cur.next;
            prev.next = cur.next;
            cur = prev;
        }
        prev = cur;
        cur = cur.next;
    }
    return head;
};