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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    //dfs pre or post order traversal
    if(!root) {
        return false;
    }
    let validSum = false;
    const dfs = (node, currSum) => {
        if(!node) {
            return;
        }
        currSum += node.val;
        if(currSum === targetSum && (!node.left) && (!node.right)) {
            validSum = true;
            return;
        }
        dfs(node.left, currSum)
        dfs(node.right, currSum)
    }
    dfs(root, 0)
    return validSum;
};