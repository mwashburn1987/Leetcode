/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */

class UnionFind {
    constructor (n) {
        this.n = n; 
        this.root = new Array(n).fill().map((v,i) => i);
        this.rank = new Array(n).fill(1);
    }
    
    find(node) {
        if (this.root[node] === node) return node;
        return this.root[node] = this.find(this.root[node]);
    }
    
    union(a,b) {
        let u = this.find(a),
            v = this.find(b);
        if(u === v) return false;
        if(this.rank[u] > this.rank[v]) {
            this.root[v] = u;
            this.rank[u] += this.rank[v];
        } else {
            this.root[u] = v;
            this.rank[v] += this.rank[u];
        }
    }
    
    disjointSets() {
        let set = new Set();
        for(let i = 0; i < this.n; i++) {
            set.add(this.find(i));
        }
        return set.size;
    }
}
var earliestAcq = function(logs, n) {
    logs = logs.sort(sortFunction);
    let uni = new UnionFind(n);
    for(let i = 0; i < logs.length; i++) {
        uni.union(logs[i][1], logs[i][2]);
         if(uni.disjointSets() === 1) {
            return logs[i][0];
        }
    }
    return -1;
};

const sortFunction = (a, b) => {
    if (a[0] === b[0]) {
        return 0;
    } else {
        return a[0] < b[0] ? -1 : 1;
    }
}