/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;
    
    const que = [root];
    
    while(que.length !== 0) {
        let rowSize = que.length;
        for(let i = 0; i < rowSize; i++) {
            let node = que.shift();
            if(node.left) {
                que.push(node.left);
            }
            if(node.right) {
                que.push(node.right);
            }
            if (i === rowSize - 1) {
                node.next = null;
            } else {
                node.next = que[0]
            }
        }
    }
    return root;
};