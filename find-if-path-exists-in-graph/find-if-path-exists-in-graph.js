/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    
    let adj = {};
    let stack = [];
    let visited = new Set();
    
    edges.forEach((edge) => {
        if(adj[edge[0]]) {
            adj[edge[0]].push(edge[1])
        } else {
            adj[edge[0]] = [edge[1]];
        }
        if(adj[edge[1]]) {
            adj[edge[1]].push(edge[0]);
        } else {
            adj[edge[1]] = [edge[0]];
        }
    });
    stack.push(source);
    while(stack.length > 0) {
        let currentNode = stack.pop();
        if(currentNode === destination) {
            return true;
        }
        if(!visited.has(currentNode)) {
            adj[currentNode].forEach((neighbor) => {
                stack.push(neighbor);
            });
            visited.add(currentNode);
        }
    }
    return false;
};