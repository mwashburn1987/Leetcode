/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
class Node {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}
var cloneGraph = function(node) {
//     Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
//     Output: [[2,4],[1,3],[2,4],[1,3]]
    if(node === null) return null;
    
    const cloned = new Map();
    
    const clone = (rootNode) => {
          if(!cloned.has(rootNode.val)) {
        cloned.set(rootNode.val, new Node(rootNode.val));
        cloned.get(rootNode.val).neighbors = rootNode.neighbors.map((neighbor) => {
            return clone(neighbor)
        })
    }
        return cloned.get(rootNode.val)
    }
    
  
    
    return clone(node);
    
};
