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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //declare results array
    //if root add to results array
    //declare depth counter start at 0
    // begin dfs recursion
    // if no array exists at depth element, create and add left/right
        //elsee just add left/right, increment depth
    //return results array
    let results = [];
    let depth = 0;
    if(!root) {
        return []
    }
    results.push([root.val]);
    
    //recursive here
    const dfs = (node, depth) => {
    if(!node) {
        return;
    }
    if(node) {
        depth ++;
        if(results[depth]) {
            results[depth].push(node.val)
        } else {
            results[depth] = [node.val];
        }
    }
        dfs(node.left, depth);
        dfs(node.right, depth);
    
    
}
    // dfs(root, 0);
    dfs(root.left, 0);
    dfs(root.right, 0);
    
    return results
    
    
};
