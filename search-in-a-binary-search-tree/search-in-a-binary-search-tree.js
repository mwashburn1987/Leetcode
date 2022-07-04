/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

//recursive
// var searchBST = function(root, val) {
//     if(!root) return null;
//     if(root.val === val) return root; 
//     if(val < root.val) return searchBST(root.left, val);
//     if(val > root.val) return searchBST(root.right, val);
// };

//iterative
var searchBST = function(root, val) {
    let stack = [];
    
    if(!root) return null;
    if(root.val === val) return root;
    
    stack.push(root);
    
    while(stack.length) {
        const node = stack.pop();
        if(!node) continue;
        if (node.val === val) return node;
        
        if(val < node.val) {
            stack.push(node.left)
        } else {
            stack.push(node.right);
        }
    }
    return null;
}