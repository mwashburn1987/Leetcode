/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    
    let suc = null;
    let found = false;
    
    
    const inOrd = (node) => {
        if(!node) return;
        
        inOrd(node.left);
        
        if(found) {
            suc = node;
            found = false;
            return;
        }
        if(node.val === p.val) {
            found = true;
            
        }
        inOrd(node.right);
    }
    
    inOrd(root);
    return suc;
};