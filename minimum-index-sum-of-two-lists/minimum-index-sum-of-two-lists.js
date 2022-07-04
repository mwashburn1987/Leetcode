/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    
    const map = new Map();
    let minSum = Infinity;
    let result = [];
    
    if(list1.length > list2.length) {
        for(let i = 0; i < list1.length; i++) {
            map.set(list1[i], i);
        }
        for(let j = 0; j < list2.length; j++) {
            if(map.has(list2[j])) {
                sum = map.get(list2[j]) + j;
                if(sum < minSum) {
                    minSum = sum;
                    result = [list2[j]];
                } else if (sum === minSum) {
                    result.push(list2[j]);
                }
            }
        }
        
    } else {
        for (let i = 0; i < list2.length; i++) {
            map.set(list2[i], i)
        }
        
          for(let j = 0; j < list1.length; j++) {
              
            if(map.has(list1[j])) {
                sum = map.get(list1[j]) + j;
                if(sum < minSum) {
                    minSum = sum;
                    result = [list1[j]]
                } else if(sum === minSum) {
                    result.push(list1[j]);
                }
            }
        }
        // console.log(map.keys());
        // console.log('this is list 1', list1)
    }
    return result;
    
};