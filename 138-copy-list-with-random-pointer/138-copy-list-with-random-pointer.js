/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map();
    
    let cur = head;
    
    while(cur) {
        map.set(cur, new Node(cur.val, null, null));
        cur = cur.next;
    }
    
    // for(const [ old, new ] of map) 
    for (const [ oldNode, newNode ] of map) {
        // if(map.get(oldNode.random)) {
        //     newNode.random = oldNode.random;
        // }
        // if(map.get(oldNode.next)) {
        //     newNode.next = oldNode.next;
        // }
        newNode.next = oldNode.next && map.get(oldNode.next);
        console.log(map.get(oldNode.random));
        newNode.random = oldNode.random && map.get(oldNode.random);
    }
    
    return map.get(head);
};

// var copyRandomList = function (head) {
//   let map = new Map();
//   let ptr = head;

//   while (ptr) {
//     // map old - new
//     map.set(ptr, new Node(ptr.val, null, null));
//     ptr = ptr.next;
//   }

//   for (const [ oldptr, newptr ] of map) {
//     newptr.next = oldptr.next && map.get(oldptr.next);
//     newptr.random = oldptr.random && map.get(oldptr.random);
//   }
//   return map.get(head);
// };