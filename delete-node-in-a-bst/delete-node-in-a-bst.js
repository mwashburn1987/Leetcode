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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null;
    
    if(root.val === key) {
        if(!root.left && !root.right) {
            return null;
        } else if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            let temp = root.right;
            while(temp.left) {
                temp = temp.left;
            }
            temp.left = root.left
            return root.right
        }
    }
    if(key < root.val) {
        root.left = deleteNode(root.left, key);
    }
    if(key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    return root;
};