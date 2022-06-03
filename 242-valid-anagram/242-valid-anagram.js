/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let map = new Map();
    for(i = 0; i < s.length; i++) {
        if(map.get(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    
    for(j = 0; j < t.length; j++) {
        if(!map.get(t[j]) || map.get(t[j]) === 0) {
            return false
        } else {
            map.set(t[j], map.get(t[j]) - 1)
        }
    }
    return true;
};