/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    
    const map = new Map();

    
    for(let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        const mappedChar = map.get(charS);
        
        if(mappedChar && mappedChar !== charT) return false;
        map.set(charS, charT);
    }
    
    const set = new Set();
    for(let v of map.values()) {
        if(set.has(v)) return false;
        set.add(v)
    }
    return true;
};