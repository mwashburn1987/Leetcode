/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //two pointer, declare both pointers
    let f = head;
    let s = head;
    
    //loop through LL and check for pointer intersection
    while(f && f.next) {
        f = f.next.next;
        s = s.next;
        if(f === s) {
            return true;
        }
    }
    return false;

};

    
//     //naive solution
//     if(!head) return false
//     let s = new Set();
//     while(head !== null) {
//         if(s.has(head)) {
//             return true
//         }
//         s.add(head);
//         head = head.next;
//     }
//     return false;