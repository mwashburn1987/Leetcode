
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    //simply push x to first stack
    this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    //make sure stack 2 is empty, pop all values from s1 into s2, pop and return last value in s2
    if(!this.s2.length) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    //same as pop except we don't return the pop, we just return the last element
        if(!this.s2.length) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
   return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    //check length of s1 and s2 return
    return !this.s1.length && !this.s2.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */