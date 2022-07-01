/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //second data structure KATE SAYS USE STACK
    
    let s = [];
    let results = [];
    
    //loop through temp array
    //check next ele for higher temp
    // if so, push next index-curr index to results
    // if not, push that value to the stack
    // as you increment check stack against next value as well as current ele
    // return results array
    
    for ( let i = 0; i < temperatures.length; i++) {
        while(temperatures[s[s.length - 1]] < temperatures[i]) {
            let popped = s.pop();
            results[popped] = (i - popped);
        }
        
        if ( i + 1 < temperatures.length) {
            if(temperatures[i] < temperatures[i + 1]) {
               results[i] = 1;
            } else {
                s.push(i);
            }
        } else {
            results[i] = 0;
        }
    }
    while(s.length) {
        results[s[s.length - 1]] = 0;
        s.pop();
    }
    return results;
};