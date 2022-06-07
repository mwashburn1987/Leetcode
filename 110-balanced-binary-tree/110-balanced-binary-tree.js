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
var isBalanced = function(root) {

    return depthCheck(root, 0) >= 0
    };

const depthCheck = (root, depth) => {
    if(!root) return depth
    let left = depthCheck(root.left, depth + 1);
    let right = depthCheck(root.right, depth + 1);
    if(Math.abs(left - right) > 1) return -1;
    return Math.max(left, right);
}