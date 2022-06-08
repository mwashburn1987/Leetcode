/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    //simple binary search problem
    return function(n) {
        //declare left right and mid
        let left = 1;
        let right = n;
        while(left < right) {
            let mid = left + Math.floor((right - left) / 2);     
        
            //check our mid, shrink range and repeat
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        //return result
        return left;
    };
};