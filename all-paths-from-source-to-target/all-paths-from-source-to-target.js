/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    
    //DFS
//     //Input: graph = [[1,2],[3],[3],[]]
    
    
//     // let adj = {};
//     const paths = [];
    
//     //don't need adjacency list for this
//     // for(let i = 0; i < graph.length; i++) {
//     //     adj[i] = [];
//     //     graph[i].forEach((v) => {
//     //         adj[i].push(v);
//     //     })
//     // }
    
//     const dfs = (node, path) => {
//    if(node === graph.length - 1) {
//        paths.push(path)
//    }
        
//     for(const idx of graph[node]) {
//         dfs(idx, [...path, idx])
//     }
// }
   
//     dfs(0, [0]);
//     return paths;
    
    //BFS
    const paths = [];
    const que = [[0]];
    
//     const map = new Map();
    
//     for(let i = 0; i < graph.length; i++) {
//         if(graph[i].length > 0) {
//             graph[i].forEach((n) => {
//                 if(map.has(i)) {
//                     map.get(i).push(n)
//                 } else {
//                     map.set(i, [n])
//                 }
//             })
//         }
//     }
    
    // map.get(0).forEach((neighbor) => {
    //     que.push([0, neighbor])
    // });
    
    while(que.length > 0) {
        let currPath = que.shift();
        let last = currPath[currPath.length - 1];
        if(last === graph.length - 1) {
            paths.push(currPath);
            continue;
        }
        
        for(let i = 0; i < graph[last].length; i++) {
            let newPath = new Array(...currPath, graph[last][i]);
            que.push(newPath)
        }
    }
    
    return paths;
    
};

