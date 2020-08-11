let creatTree = require("./CreateTree");

let root = creatTree();

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return false;
    let queue = []; 
    queue.push(root);
    let cur = root;
    while(queue.length>0){
        let len = queue.length; 
        while(len){
            cur = queue.shift();
            if(cur.left) queue.push(cur.left);
            if(cur.right) queue.push(cur.right);
            len--;
        }
        //* 判断队列里面的元素是否对称
        if(queue.length%2!=0) return false;
        if(queue.length==0) return true;
        for(let left=0,right=queue.length-1;right>left;left++,right--){
            if(queue[left].val!==queue[right].val){
                return false;
            }
        }
    }
    return true;
};

console.log(isSymmetric(root))