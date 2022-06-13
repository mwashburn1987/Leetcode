/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    //need quantities of all letters > 2
    //declare hash, mid char
    //loop through string
    //add letters to a hash as key with quantity as value
    //largest quantity will be center of palindrome
    //if all quantities 2 and greater are even numbers, we can take a singe 1 quantity char
    //loop through hash
    //if mid is null and hash[char] mod 2 == 1, set mid = hash[char]
    //if hash[char] <= 1 delete hash[char]
    //return hash.key.length
    
    let result = 0;
    const hash = {};
    let mid = null;
    for(let i = 0; i < s.length; i ++) {
        if(hash[s[i]]) {
            hash[s[i]] ++;
        } else hash[s[i]] = 1;
    }
    for (let k in hash) {
        if(hash[k] % 2 === 1) {
            if(mid === null) {
                mid = hash[k];
            }
            hash[k] -= 1;
        } else if (mid && hash[k] <= 1) {
            delete hash[k];
            continue;
        }
        result += parseInt(hash[k]);
    }
        if(mid) {
           return result + 1; 
        }
    return result;
    
};