/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) {
        return -1;
    }
    
    //bfs with queue
    
    //create directions array to avoid redundancy
    let directions = [
        [1,0],//down
        [-1, 0], //up
        [0, 1], //right
        [0, -1], //left
        [1, 1], //downright
        [1, -1], //downleft
        [-1, 1], //upright
        [-1, -1] //upleft
    ]
    
    const n = grid.length;
    //initialize queue with starting point and current length
    const que = [[0, 0, 1]];
    while(que.length) {
        const [row, col, dist] = que.shift();
        if(row === n - 1 && col === n - 1) {
            return dist;
        }
        //create our neighbor locations using our 8 directions
        for(const [x, y] of directions) {
            let a = row + x,
                b = col + y;
        
        
            //if any of our new neighbors are invalid we want to skip them
            if(a < 0 || a >= n) continue;
            if(b < 0 || b >= n) continue;
            if(grid[a][b] !== 0) continue;
    
            //push neighbor into queue
            que.push([a,b, dist + 1])
            //avoid loops by changing square value to 1;
            grid[a][b] = 1;
        }
    }
    return -1;
};