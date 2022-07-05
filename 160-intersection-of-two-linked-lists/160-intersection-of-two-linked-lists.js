/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //O(n) memory
//     const set = new Set();
    
//     let nodeA = headA;
//     let nodeB = headB;
    
//     while(nodeA) {
//         set.add(nodeA);
//         nodeA = nodeA.next;
//     }
    
//     while(nodeB) {
//         if(set.has(nodeB)) return nodeB;
//         nodeB = nodeB.next;
//     }
    
//     return null;
    
    let nodeA = headA,
        nodeB = headB;
    let start = 0;
    
    let countA = 0, countB = 0;
    
    while(nodeA) {
        countA++;
        nodeA = nodeA.next;
    }
    while(nodeB) {
        countB++;
        nodeB = nodeB.next;
    }
    nodeA = headA;
    nodeB = headB;
    
    if(countA >= countB) {
        start = countA - countB;
    
         while(start > 0) {
            nodeA = nodeA.next;
            start --;
        }
        while(nodeA && nodeB) {
           if(nodeA === nodeB) return nodeA;
            nodeA = nodeA.next;
            nodeB = nodeB.next;
        }
    } else if (countB > countA) {
                start = countB - countA;
    
         while(start > 0) {
            nodeB = nodeB.next;
            start --;
        }
        while(nodeA && nodeB) {
           if(nodeA === nodeB) return nodeA;
             nodeA = nodeA.next;
            nodeB = nodeB.next;
        }
    }
    
    return null;
};