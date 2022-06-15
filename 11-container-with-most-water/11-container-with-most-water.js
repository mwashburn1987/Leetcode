/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    //two pointer solution
    //declare largest container
    //set pointer1 to beginning of array
    //set pointer2 to end of array
    //find distance between elements as pointer2 - pointer1
    //multiply smaller pointer by width and check max area
    //update largest container if necessary
    //move smaller pointer forward or backwards depending on position
    //continue until pointers intersetc
    //return largest container
    
    //O(n) Time
    //O(n) Space
    
    let p1 = 0;
    let p2 = height.length - 1;
    let maxContainer = 0;
    
    while(p1 < p2) {
        let difference = p2 - p1;
        maxContainer = Math.max(maxContainer, Math.min(height[p1], height[p2]) * difference);
        if(height[p1] <= height[p2]) {
            p1++;
        } else {
            p2--
        }
    }
    return maxContainer;
    
};