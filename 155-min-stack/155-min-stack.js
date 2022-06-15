
class MinStack {
    st = [];

    push(val) {
        if (this.st.length === 0) {
            this.st.push([val, val])
            return;
        }
        let currMin = this.st[this.st.length - 1][1];
        this.st.push([val, Math.min(currMin, val)]);
    }
    
    pop() {
        this.st.pop();
    }

    top() {
        return this.st[this.st.length - 1][0];
    }

    getMin() {
        return this.st[this.st.length - 1][1];
    }
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */