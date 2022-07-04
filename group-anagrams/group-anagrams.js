/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 1) {
        return [strs];
    }
    const results = [];
    const map = new Map();
    
//     let copy = strs;
//     for(let j = 0; j < strs.length; j++) {
        
//     }
    
    let sorted = [];
    
    for(let k = 0; k < strs.length; k++) {
        let temp = strs[k].split('').sort().join('');
        sorted.push(temp);
    }
    // console.log(sorted);
    for(let i = 0; i < sorted.length; i++) {
        if(map.has(sorted[i])) {
            map.get(sorted[i]).push(i);
        } else {
            map.set(sorted[i], [i])
        }
    }
    // console.log(map.keys(), map.values());
    for(const arr of map.values()) {
        let temp = [];
        for(let k = 0; k < arr.length; k++) {
            temp.push(strs[arr[k]]);
        }
        results.push(temp);
    }
    
    return results;
};