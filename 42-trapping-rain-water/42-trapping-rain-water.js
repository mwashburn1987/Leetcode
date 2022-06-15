/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //two pointer method
    //declare left pointer as start of array, right as end
    //set a max height value for left and right starting at zero
    //move pointers inward based on height value
        //lower of the two increments/decrements
    //each step check current height vs max height, 
        //if current height is less than max height, add difference of max/current to total water sum
        //otherwise set new max height
    //once pointers intersect, break loop and return
    
    let left = 0;
    let right = height.length - 1;
    let totalRain = 0;
    let leftMax = 0;
    let rightMax = 0;
    
    while(left < right) {
        if(height[left] < height[right]) {
            height[left] >= leftMax ? leftMax = height[left] : totalRain += (leftMax - height[left]);
            left ++;
        } else {
            height[right] >= rightMax ? rightMax = height[right] : totalRain += (rightMax - height[right]);
            right --;
        }
    }
    return totalRain;
};