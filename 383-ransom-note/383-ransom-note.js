/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ob = {};
    for(let i = 0; i < magazine.length; i++) {
        if(ob[magazine[i]]) {
            ob[magazine[i]] ++;
        } else ob[magazine[i]] = 1;
    }
    
    for(let j = 0; j < ransomNote.length; j++) {
        if(!ob[ransomNote[j]] || ob[ransomNote[j]] <= 0) {
            return false;
        } else {
            ob[ransomNote[j]] --;
        }
    }
    return true;
};