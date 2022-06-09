/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //5
    // 1 1 1 1 1
    // 1 1 1 2
    // 1 1 2 1
    // 1 2 1 1
    // 1 2 2
    // 2 1 1 1
    // 2 1 2
    // 2 2 1
    
    // recursive pattern
    // base case is count > steps or count === steps
    let memoized = [];
    return climb(0, n, memoized);
    };
    
    const climb = (i, n, memoized) => {
        if(i > n) return 0;
        if(i === n) return 1;
        if(memoized[i] > 0) {
            return memoized[i];
        }
        memoized[i] = climb(i + 1, n, memoized) + climb(i + 2, n, memoized)
        return memoized[i];
    }
    
    
