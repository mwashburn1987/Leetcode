/**
 * @param {number[][]} isConnected
 * @return {number}
 */

class UnionFind {
//Time Comp: find: O(n), union: O(n)
constructor(n) {
    this.n = n;
    this.root = new Array(n).fill().map((v,i) => i);
    this.rank = new Array(n).fill(1);
}
    
find(node) {
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
        const set = new Set();
        for (let i = 0; i < this.n; i++) set.add(this.find(i));
        return set.size;
    }
}
var findCircleNum = function(mat) {
    let union = new UnionFind(mat.length);
    let count = 0;
    for(let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[i][j] === 1 && (i !== j)) {
                union.union(i, j);
            }
        }
    }
    let results = union.disjointSets();
    return results;
    
};