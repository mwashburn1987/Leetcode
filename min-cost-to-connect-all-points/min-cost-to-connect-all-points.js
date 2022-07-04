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

// let minCostConnectPoints = function(points) {
//     let n = points.length;
        
//     // Min-heap to store minimum weight edge at top.
//     let heap = new MinHeap();

//     // Track nodes which are included in MST.
//     let inMST = Array(n).fill(false);

//     heap.insert(0, 0);
//     let mstCost = 0;
//     let edgesUsed = 0;

//     while (edgesUsed < n) {
//         let [weight, currNode] = heap.getMin();
//         heap.remove();

//         // If node was already included in MST we will discard this edge.
//         if (inMST[currNode]) {
//             continue;
//         }

//         inMST[currNode] = true;
//         mstCost += weight;
//         edgesUsed++;

//         for (let nextNode = 0; nextNode < n; ++nextNode) {
//             // If next node is not in MST, then edge from curr node
//             // to next node can be pushed in the priority queue.
//             if (!inMST[nextNode]) {
//                 let nextWeight = Math.abs(points[currNode][0] - points[nextNode][0]) + 
//                                  Math.abs(points[currNode][1] - points[nextNode][1]);

//                 heap.insert(nextWeight, nextNode);
//             }
//         }
//     }

//     return mstCost;
// };

// // Implementing min heap data-structure.
// class MinHeap {
//     constructor() {
//         // Initialing the array heap and adding a dummy element at index 0.
//         this.heap = [null];
//     }

//     getMin() {
//         // Accessing the min element at index 1 in the heap array.
//         return this.heap[1];
//     }
    
//     insert(weight, node) {
//         // Inserting the new node at the end of the heap array.
//         this.heap.push([weight, node]);

//         // Finding the correct position for the new node.
//         if (this.heap.length > 1) {
//             let current = this.heap.length - 1;

//             // Traversing up the parent node until the current node (current) is 
//             // greater than the parent (current/2).
//             while (current > 1 && this.heap[Math.floor(current/2)][0] > this.heap[current][0]) {
//                 // Swapping the two nodes by using the ES6 destructuring syntax.
//                 [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]];
//                 current = Math.floor(current/2);
//             }
//         }
//     }
    
//     remove() {
//         // Smallest element is at the index 1 in the heap array.
//         let smallest = this.heap[1];

//         // When there are more than two elements in the array, 
//         // we put the right most element at the first position and start 
//         // comparing nodes with the child nodes/
//         if (this.heap.length > 2) {
//             this.heap[1] = this.heap[this.heap.length - 1];
//             this.heap.splice(this.heap.length - 1);

//             if (this.heap.length === 3) {
//                 if (this.heap[1][0] > this.heap[2][0]) {
//                     [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
//                 }
//                 return smallest
//             }

//             let current = 1;
//             let leftChildIndex = current * 2;
//             let rightChildIndex = current * 2 + 1;

//             while (this.heap[leftChildIndex] && this.heap[rightChildIndex] && 
//                    (this.heap[current][0] > this.heap[leftChildIndex][0] || 
//                     this.heap[current][0] > this.heap[rightChildIndex][0])) {
                
//                 if (this.heap[leftChildIndex][0] < this.heap[rightChildIndex][0]) {
//                     [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
//                     current = leftChildIndex;
//                 } else {
//                     [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
//                     current = rightChildIndex;
//                 }

//                 leftChildIndex = current * 2;
//                 rightChildIndex = current * 2 + 1;
//             }
//         }

//         // If there are only two elements in the array, 
//         // we directly splice out the first element.
//         else if (this.heap.length === 2) {
//             this.heap.splice(1, 1);
//         } else {
//             return null;
//         }

//         return smallest;
//     }
// };