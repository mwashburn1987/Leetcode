/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //strategy
    //add root to que, and to result
    //forEach child of root, either create new array for that level in result, or push each child into that index array, return result
    
    const results = [];
    const que = [[root,0]];
    while(que.length) {
        // let temp = que.shift();
        // let node = temp[1]
        // let level = temp[1]
        const [node, level] = que.shift();
        if(node) {
            
        
        if(results[level]) {
            results[level].push(node.val)
        } else {
            results[level] = [node.val];
        }
        
        if(node.children) {
            node.children.forEach((child) => {
                que.push([child, level + 1])
            })
        }
        }
    }
    return results;
    
};