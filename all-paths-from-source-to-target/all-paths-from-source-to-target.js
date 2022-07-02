/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    //Input: graph = [[1,2],[3],[3],[]]
    
    
    // let adj = {};
    const paths = [];
    
    //don't need adjacency list for this
    // for(let i = 0; i < graph.length; i++) {
    //     adj[i] = [];
    //     graph[i].forEach((v) => {
    //         adj[i].push(v);
    //     })
    // }
    
    const dfs = (node, path) => {
   if(node === graph.length - 1) {
       paths.push(path)
   }
        
    for(const idx of graph[node]) {
        dfs(idx, [...path, idx])
    }
}
   
    dfs(0, [0]);
    return paths;
    
};

