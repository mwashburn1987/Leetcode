/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

class UnionFind {
    constructor(n) {
        this.n = n;
        this.root = new Array(n).fill().map((v,i) => i);
        this.rank = new Array(n).fill(1);
    }
    
    find (node) {
        if(this.root[node] === node) return node;
        return (this.root[node] = this.find(this.root[node]));
    }
    
    union(a,b) {
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
        const set = new Set()
        for(let i = 0; i < this.n; i++) {
        set.add(this.find(i));
        
        }
        return set.size;
    }
}
var validTree = function(n, edges) {
    if(edges.length !== n - 1) 
    {return false}
    let uni = new UnionFind(n);
    for(let i = 0; i < edges.length; i++) {
        uni.union(edges[i][0], edges[i][1])
    } let numSets = uni.disjointSets();
    console.log(numSets);
    if (numSets > 1) {
        return false;
    } 
    return true;
    
};