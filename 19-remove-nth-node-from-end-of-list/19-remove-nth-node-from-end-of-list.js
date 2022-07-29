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
    let curr, temp, prev, counter;
    curr = head;
    next = curr;
    let length = 0;
    
    while(curr) {
        length++;
        curr = curr.next;
    }
    if(length === 1) {
        return null;
    }
    
    if(length === n) {
        head = head.next;
        return head;
    }
    counter = length - n;
    temp = curr = head;
    
    while(counter > 0 && temp) {
        counter--;
        prev = temp;
        temp = temp.next;
    }
    if(temp.next) {
        prev.next = temp.next;
    } else {
        prev.next = null;
    }
    return curr;
    
};