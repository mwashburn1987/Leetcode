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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //initialize result
    let result = null;
    
    const dfs = (node) => {
        if(!node) return false;
        let left = dfs(node.left);
        let right = dfs(node.right);
        
        let cur = node === p || node === q;
        if(cur + left + right >= 2) {
            result = node;
        }
        return cur || right || left;
    }
    
     dfs(root);
    
    return result;
    
    
};