/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let number = [];
    let stack = [];
    let visited = new Set();
    let cur = root;
    while(cur || stack.length>0){
        if(cur){
            stack.push(cur);
            cur = cur.left;
        }else{
            cur = stack.slice(-1)
            // cur = stack[stack.length-1]
            if(!cur.right||visited.has(cur.right)){
                let item = stack.pop();
                number.push(item.val);
                visited.add(item);
                cur = null;
            }
            cur = cur.right;
            
        }
    }
    return number;
};