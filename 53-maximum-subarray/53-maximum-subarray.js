/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //initialize curr and max sum
    let currSum = 0;
    let maxSum = -Infinity;
    //loop through numsarray
    for(let i = 0; i < nums.length; i++) {
        //check if currSum is less than zero, set to zero if so
        if(currSum < 0) {
            currSum = 0;
        }
        //add current index to currSum
        currSum += nums[i];
        //if currSum is > maxSum, set maxSum = to currSum
        if(currSum > maxSum) {
            maxSum = currSum;
        }
    }
    //return
    return maxSum;
};