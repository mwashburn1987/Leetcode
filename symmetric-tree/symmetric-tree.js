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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) {
        return false;
    }
    
    let h = 0;
    const levels = [];
    
    const dfs = (height, node) => {
        if(!node) {
           if(levels[height]) {
            levels[height].push(null);
        } else {
            levels[height] = [null];
        }
            return;
        }
        
        //create a new array or push to existing array for each
        //level, these will function as a stack we can two pointer
        if(levels[height]) {
            levels[height].push(node.val);
        } else {
            levels[height] = [node.val];
        }
        dfs(height + 1, node.left);
        dfs(height + 1, node.right);
    }
    dfs(h, root);
    console.log(levels);
    //iterate through each level stack, if mirror isn't found, return false
    for(let i = 1; i < levels.length; i++) {
        let left = 0, right = levels[i].length - 1;
        while(left < right) {
            if(levels[i][left] !== levels[i][right]) {
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
    
};