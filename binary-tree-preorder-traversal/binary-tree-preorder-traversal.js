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
var preorderTraversal = function(root) {
    //use a queue
    if(!root) {
        return [];
    }
    if(!root.left && !root.right) {
        return[root.val];
    }
    
    //preorder === dfs????
//     const results = [];
//     const q = [];
//     q.push(root);
    
//     while(q.length) {
//         let temp = q.shift();
//         if(!temp) {
//             continue;
//         }
//         results.push(temp.val);
//         q.push(temp.left, temp.right);
//     }
    
    const results = [];
    const dfs = (node, results) => {
        if(!node) {
            return;
        }
        results.push(node.val);
        dfs(node.left, results);
        dfs(node.right, results);
    }
    dfs(root, results);
    return results;
};