/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    //I - an array of ints representing stock prices on a day
    //O - the greatest positive difference between two days in the array
    //C - None
    //E - empty array, never positive difference
    
    //pseudo
    //delcare result
    let result = 0;
    if(prices.length <= 1) {
        return result;
    }
    //declare pointers
    let min = prices[0]
    //loop through array
    for (i = 1; i < prices.length; i++) {
        if((prices[i] - min) > result) {
            result = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    
    //return result
    return result;
    
};