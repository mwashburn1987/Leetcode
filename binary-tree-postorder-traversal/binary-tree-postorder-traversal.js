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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const results = [];
    
    if(!root) {
        return results;
    }
    
    const dfs = (node, res) => {
        if(!node) {
            return;
        } 
        dfs(node.left, res);
        dfs(node.right, res);
        res.push(node.val);
    }
    dfs(root, results);
    return results;
};