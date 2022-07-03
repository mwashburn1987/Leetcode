/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const adjList = {};
    const res = [];
    
    for(let i = 0; i < tickets.length; i++) {
        if(adjList[tickets[i][0]]) {
            adjList[tickets[i][0]].push(tickets[i][1]);
        } else {
            adjList[tickets[i][0]] = [tickets[i][1]];
        }
    }
    
    for (let dests in adjList) {
        adjList[dests].sort();
    }
    
    const dfs = (node) => {
        let des = adjList[node];
        while(des && des.length > 0) {
            dfs(des.shift());
        }
        res.push(node);
    }
    
    dfs('JFK');
    return res.reverse();
};