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
var isSymmetric2 = function (root) {
    if(!root) return true;
    return symmetricCheck(root.left,root.right);
};

var symmetricCheck = function(left,right){
    if(left===null && right===null) return true;
    if(left===null || right===null) return false;
    return left.val===right.val && symmetricCheck(left.left,right.right) && symmetricCheck(left.right,right.left);
}

var isSymmetric3 = function(root) {
    if(!root) return true;
    let queue = []; 
    queue.push(root);
    let cur = root;
    while(queue.length>0){
        let len = queue.length; 
        while(len){
            cur = queue.shift();
            len--;
            if(!cur) continue;
            queue.push(cur.left);
            queue.push(cur.right);
            
        }
        //* 判断队列里面的元素是否对称
        for(let left=0,right=queue.length-1;right>left;left++,right--){ //! 与其从队列中头尾取数据比较，不如入队列时将头尾放一起，这样才符合队列的操作。
            if(queue[left]===null && queue[right]===null) continue;
            if(queue[left]===null || queue[right]===null) return false;
            if(queue[left].val!==queue[right].val){
                return false;
            }
        }
    }
    return true;
};


var isSymmetric = function(root){
    if(!root) return true;
    let queue = [];
    queue.push(root);
    queue.push(root);
    while(queue.length>0){
        let left = queue.shift();
        let right = queue.shift();
        if(left===null&&right===null) continue;
        if(left===null || right===null || left.val!==right.val) return false;

        queue.push(left.left);
        queue.push(right.right);

        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
}



console.log(isSymmetric(root))