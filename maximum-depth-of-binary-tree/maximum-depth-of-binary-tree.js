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
var maxDepth = function(root) {
    if(!root) return 0;
    let depth = 1;
    
    
    const dfs = (node, d) => {
        if(!node) {
            return
        }
        if(d > depth) {
            depth = d;
        }
        dfs(node.left, d + 1);
        dfs(node.right, d + 1)
    }
    dfs(root, depth);
    return depth;
};