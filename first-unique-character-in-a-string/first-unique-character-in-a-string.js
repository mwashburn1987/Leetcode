/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1)
    }
    
    for(let j = 0; j < s.length; j++) {
        if(map.get(s[j]) === 1) {
            return j;
        }
    }
   
    return -1;
};