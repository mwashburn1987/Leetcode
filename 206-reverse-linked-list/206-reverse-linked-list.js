/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    //can do with stack but adds additional space complexity***
    
    //loop through list, set pointers for prevNode, currNode and currNode.next
    //reassign pointers
    //return new head
   
    let prevNode = null;
    let currNode = head;
    
    while(currNode) {
        let nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    
    return prevNode;
};