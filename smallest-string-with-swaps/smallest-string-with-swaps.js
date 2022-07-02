/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */

class UnionFind {
    constructor(n) {
        this.n = n;
        this.root = new Array(n).fill().map((v,i) => i);
        this.rank = new Array(n).fill(1);
    }
    
    find(node) {
        if(this.root[node] === node) return node;
        return this.root[node] = this.find(this.root[node]);
    }
    
    union(a,b) {
        let u = this.find(a),
            v = this.find(b);
        if(u === v) return false;
        if(this.rank[u] > this.rank[v]) {
            this.root[v] = u;
            this.rank[u] += this.rank[v]
        } else  {
            this.root[u] = v;
            this.rank[v] += this.rank[u];
        } 
        return true;
    }
    
    disjointSets() {
        let set = new Set();
        for(let i = 0; i < this.n; i++) {
            set.add(this.find(i));
        }
        return set.size;
    }
}
var smallestStringWithSwaps = function(s, pairs) {
    //instantiate our UnionFind
    let djs = new UnionFind(s.length);
    //loop through edges and join them with union method
    for(let i = 0; i < pairs.length; i++) {
        djs.union(pairs[i][0], pairs[i][1]);
    }
    //create a hashmap to store our different different collections by root
    let map = new Map();
    for(let j = 0; j < djs.root.length; j++) {
        if(map.get(djs.find(j))) {
            map.get(djs.find(j)).push(j)
        } else {
            map.set(djs.find(j), [j]);
        }
    }
    //sort each separate connected collection of nodes
    for (const arr of map.values()) {
        arr.sort((a,b) => {
            if(s[a] === s[b]) return 0;
            return (s[a] < s[b] ? -1 : 1);
        })
    }
    let smallestString = '';
    for(let k = 0; k < s.length; k++) {
        let temp = djs.find(k);
        smallestString += s[map.get(temp).shift()];
    }
    return smallestString;
    
    //
};