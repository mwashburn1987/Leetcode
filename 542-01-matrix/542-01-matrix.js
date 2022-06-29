/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    
    
//strategy
//we know our matrix consists of only 1’s and 0’s. We need to track the minimum distance that any 1 is from the closest 0. We can do this using BFS and a queue
//the idea is to loop through matrix, store any 0’s location in a queue, and change any 1 to a different value of our choice to identify it as a square with no solution yet. We will use -1.
//We can then run our bfs on each queue element and search one space in each direction. When we find a -1, we set the value to be 1 + value of square that found it. 
// i.e. the first time it would be 1 + 0, if that square found another - 1 it would be 1 + 1 etc
// we then set the value of that square to be our previous sum and add it to the queue.
//once the queue is empty and we have finished our bfs our matrix should return with the correct answer and has been done in place

//pseudo and coding

    //value checking helper function
const valueCheck = (matrix, row, col, val) => {
  if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
    return;
    } 
  if(matrix[row][col] === -1) {
    matrix[row][col] = val + 1;
    que.push([row,col])
    } 
  }

//create queue
let que = [];

//loop through matrix

for(let i = 0; i < matrix.length; i++) {
  for(let j =0; j < matrix[0].length; j++) {
    if(matrix[i][j] === 0) {
    que.push([i, j]);
  } else {
    matrix[i][j] = -1;
    }
  }
};

//loop through queue elements and change values
while(que.length > 0) {
  let location = que.shift();
  let currValue = matrix[location[0]][location[1]]
  valueCheck(matrix, location[0], location[1] + 1, currValue); // right
  valueCheck(matrix, location[0] + 1, location[1], currValue); // down
  valueCheck(matrix, location[0], location[1] - 1, currValue); // left
  valueCheck(matrix, location[0] - 1, location[1], currValue); // up
  }

//return results
return matrix;

    
};