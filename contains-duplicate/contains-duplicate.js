/**
 * @param {number[]} nums
 * @return {boolean}
 */

class hashSet {
    constructor() {
        this.storage = {}
    }
    
    add (key) {
        if(!this.storage[key]) {
            this.storage[key] = null
        }
    }
    
    has(key) {
        return this.storage.hasOwnProperty(key);
    }
};
var containsDuplicate = function(nums) {
    // const hashSet = new Set();
    
    const set = new hashSet();
    for( let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) return true;
        set.add(nums[i])
    }
    
    return false;
};