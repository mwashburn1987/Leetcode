
var MyHashMap = function() {
    this.storage = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {

    this.storage[key] = value;
    // console.log(key, value);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let k = key.toString();
    console.log(this.storage[k]);
    if(this.storage[k] !== undefined) {
        return this.storage[k];
    } else {
       return -1; 
    }
    return this.storage[key];
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.storage[key];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */