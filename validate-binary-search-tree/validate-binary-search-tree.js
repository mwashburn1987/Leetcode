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
 * @return {boolean}
 */
var isValidBST = function(root) {
    //in order traversal dfs
    let isValid = true
    let tempNode = new TreeNode(-Infinity, null, null);
    
    const inOrderDFS = (node) => {
        if(!node || !isValid) {
            return;
        }
        inOrderDFS(node.left);
        
        if(node.val <= tempNode.val) {
            isValid = false; 
            return;
        }
        tempNode = node;
        
        inOrderDFS(node.right);
    }
    inOrderDFS(root);
    return isValid;
};