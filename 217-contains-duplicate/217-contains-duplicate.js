/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    //create set
    //loop through array
    //if set has curr element, return true
    //else add to set
    //return falase
    
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    
    return false;
    
};