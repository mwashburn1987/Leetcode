/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.q = [];
    
    const inOrd = (node) => {
        if(!node) return;
        
        inOrd(node.left);
        
        this.q.push(node);
        
        inOrd(node.right);
    }
    inOrd(root);
};


/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    if(this.q.length) return this.q.shift().val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.q.length) {
        return true;
    }
    return false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */