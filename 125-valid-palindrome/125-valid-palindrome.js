/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length < 1) {
        return true;
    }
    //declare result
    let result = true;
    
    // Remove all non alpha-numeric characters and conver to lower case
    let replaced = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // count chars from outside in starting with first/last element and check for matches
    let b = 0;
    let e = replaced.length - 1;
    
    if ( replaced.length % 2 === 0) {
        while (b < e) {
            if (replaced[b] !== replaced[e]) {
                return false;
            }
            b ++;
            e --;
        }
    } else {
        while (b <= e) {
           if (replaced[b] !== replaced[e]) {
                return false;
            } 
            b++;
            e --;
        }
    }
    return result;
    
};