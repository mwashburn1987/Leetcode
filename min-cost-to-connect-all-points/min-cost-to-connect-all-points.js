/**
 * @param {number[][]} points
 * @return {number}
 */

class UnionFind {
    constructor(n) {
        this.n = n;
        this.root = new Array(n).fill().map((v,i) => i);
        this.rank = new Array(n).fill(1);
    }
    
    find(node) {
        if(this.root[node] === node) return node;
        return this.root[node] = this.find(this.root[node])
    }
    
    union(a, b) {
        const u = this.find(a),
              v = this.find(b);
        if(u === v) return false;
        if(this.rank[u] > this.rank[v]) {
            this.root[v] = u;
            this.rank[u] += this.rank[v];
        } else {
            this.root[u] = v;
            this.rank[v] += this.rank[u];
        }
        return true;
    }
    
    disjointSets() {
        const set = new Set();
        for(let i = 0; i < this.n; i++) {
            set.add(this.find(i));
        }
        return set.size;
    }
}
var minCostConnectPoints = function(points) {
    let n = points.length;
    let totalEdges = [];
    
    //store all the edges of a complete graph
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            let weight = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            totalEdges.push([weight, i, j])
        }
    }
    
    //sort edges in ascending order
    totalEdges.sort((a, b) => a[0] - b[0]);
    
    let uni = new UnionFind(n);
    let minCost = 0;
    let edgesCount = 0;
    
    for (let i = 0; i < totalEdges.length && edgesCount < n - 1; i++) {
        let [weight, node1, node2] = totalEdges[i];
        
        if(uni.union(node1, node2)) {
            minCost += weight;
            edgesCount++;
        }
    }
    
    return minCost;
};