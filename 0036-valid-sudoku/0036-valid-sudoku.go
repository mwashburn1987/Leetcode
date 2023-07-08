func isValidSudoku(board [][]byte) bool {
// things we need to solve for
    // rows
        // nested for loop inner array increment create map, check for duplicates, 
        // return false if found
   
    // columns
        // nested for loop, outer array increment, create map, check for duplicates,
        // return false if found
    // 3x3 grids
        
    // we can create a map for each row, column and grid (27 total)
    // loop through each square, check maps and add it's value to the corresponding maps on single pass through
    // 
    
    rows := make([]map[byte]int, 9);
    cols := make([]map[byte]int, 9);
    grid := make([]map[byte]int, 9);

    for i := 0; i < 9; i++ {
        rows[i] = make(map[byte]int);
        cols[i] = make(map[byte]int);
        grid[i] = make(map[byte]int);
    };

    for i, r := range board {
        for j, c := range r {
            if string(board[i][j]) == "." {
                continue
            }
            
            if c >= '1' {
                g := (i / 3) * 3 + (j / 3);
                if (rows[i][c] > 0 || cols[j][c] > 0 || grid[g][c] > 0) {
                    return false;
                }
                rows[i][c]++;
                cols[j][c]++;
                grid[g][c]++;
            }  
        }
    }
    return true
}