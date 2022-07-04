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
    if (!root) {
        return [];
    }
    
    // const q = [];
    // const results = [];
    
    const q = [], results = [], level = 0;
    
    q.push([level, root]);
    while(q.length) {
        const[level, node] = q.shift();
        if(!node) {
            continue;
        }
        q.push([level + 1, node.left], [level + 1, node.right]);
        if(results[level]) {
            results[level].push(node.val)
        } else {
            results[level] = [node.val]
        }
    }
    return results;
};

