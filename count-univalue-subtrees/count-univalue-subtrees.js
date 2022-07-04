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
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    let count = 0;
    
    findTrees(root);
    
    return count;
    
    function findTrees(node){
        if(!node) return true;
        
        const l = findTrees(node.left);
        const r = findTrees(node.right);
        
        if(!l || !r) return false;
        
        if(node.left !== null && node.left.val !== node.val) return false;
        if(node.right !== null && node.right.val !== node.val) return false;
        
        count++;
        return true;
    }
};