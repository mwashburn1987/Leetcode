/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //edge cases
    if(target === undefined || target < nums[0] || target > nums[nums.length - 1]) {
        return - 1;
    }
    
    //declare bounds
    let start = 0;
    let end = nums.length - 1;
    //grab middle index
    let middle = Math.floor((start + end) / 2)
    
    
    //loop through array shrinking size and searching for target
    while(start <= end) {
        if(nums[middle] === target) {
            return middle
        } else if(nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
    return -1;
    
};