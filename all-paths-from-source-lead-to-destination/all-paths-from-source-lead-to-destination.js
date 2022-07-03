/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
    //strategy
    //run dfs from source and track all paths
    //if a path ends and we have not reached destination, return false
    //if we encounter a visited node, there is a potential cycle, return false
    //else return true
    
    const visited = new Set();
    const adj = new Map()
    
    // for(let i = 0; i < edges.length; i++) {
    //     if (adj[edges[i][0]]) {
    //         adj[edges[i][0]].push(edges[i][1])
    //     } else {
    //         adj[edges[i][0]] = [edges[i][1]]
    //     }
    // }
    
    for(let [from, to] of edges) {
        if(!adj.get(from)) adj.set(from, new Set());
        adj.get(from).add(to);
    }
    
    const dfs = (node) => {
        if(visited.has(node)) return false;
        
        if(!adj.has(node)) return node ===                   destination;
        visited.add(node);
        
        for (let nextNode of adj.get(node)) {
            if(!dfs(nextNode)) return false;
        }
        visited.delete(node);
        return true;
    }
    
    return dfs(source);
};