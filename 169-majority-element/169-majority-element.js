/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //majority element always exists so no need to edge case
    //initialize majority element var
    //initialize current max total as 0;
    //loop through array
    //add each element to hash as char:amountOfTimesAppeared
    //check if hash[char] > currMax
        //if so set currMax equal to hash[char] and majority = char
    //return char
    
    //O(n) time
    //O(n) space
    let majority;
    let eleCount = {};
    let currMax = 0;
    for(i = 0; i < nums.length; i++) {
        if(eleCount[nums[i]]) {
            eleCount[nums[i]] ++
        } else {
            eleCount[nums[i]] = 1;
        }
        if(eleCount[nums[i]] > currMax) {
            currMax = eleCount[nums[i]];
            majority = nums[i];
        }
    }
    
    return majority;
};