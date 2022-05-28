/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    //declare map for storage
    const map = new Map()
    
    //loop through magazine
    for (i = 0; i < magazine.length; i ++) {
        
        if(map.has(magazine[i])) {
            map.set(magazine[i], map.get(magazine[i]) + 1)
        } else {
            map.set(magazine[i], 1)
        }
    }
    
    //loop through note
    for (i = 0; i < ransomNote.length; i++) {
        if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
            return false;
        } else {
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
        }
    }
    //return
    return true;
};