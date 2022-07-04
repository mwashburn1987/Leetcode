/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //just store num and most recent index in map
    //when dup is encountered, subtract prev ind from current
    //ind, if <= k return true, else false
    
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            if(i - map.get(nums[i]) <= k) {
                return true;
            } else {
                map.set(nums[i], i)
            }
        } else {
            map.set(nums[i], i)
        }
        }
    return false;
};