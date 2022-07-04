/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const results = [];
    
    let short, long;
    
    if(nums1.length > nums2.length) {
        long = nums1;
        short = nums2
    } else {
        long = nums2;
        short = nums1;
    }
    
    for(let i = 0; i < long.length; i++) {
        map.set(long[i], map.get(long[i]) +1 || 1);
    }
    
    for(const num of short) {
        if(map.get(num) > 0) {
            results.push(num);
            map.set(num, map.get(num) - 1)
        }
    }
    
    return results;
};