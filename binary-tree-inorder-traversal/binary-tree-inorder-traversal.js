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
var inorderTraversal = function(root) {
    
    //recursion is trivial you say. . . 
//     if(!root) {
//         return [];
//     }
//     const results = [];
    
//     const dfs = (node, results) => {
//         if(!node) {
//             return;
//         }
//         dfs(node.left, results);
//         results.push(node.val);
//         dfs(node.right, results);
//     }
//     dfs(root, results)
    
//     return results;
    
    
    //let's try iteratively
    
    if(!root) {
        return [];
    }
    
  var callStack = [];
  var current = root;
  var result = [];
  while (true) {
    while (!!current) {
        callStack.push(current);
        current = current.left;
    }
    if (callStack.length == 0) break;
    var lastCurrent = callStack.pop();
      result.push(lastCurrent.val);
      current = lastCurrent.right;
  }
    return result;
};