/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const results = new Set();
    const set = new Set();
    let longer, shorter;
    if(nums1.length > nums2.length) {
        longer = nums1;
        shorter = nums2
    } else {longer = nums2; shorter = nums1}
    for( let i = 0; i < longer.length; i++) {
        set.add(longer[i]);
    }
    for(let j = 0; j < shorter.length; j++) {
        if(set.has(shorter[j])) {
            results.add(shorter[j])
        }
    }
    
    return Array.from(results);
};