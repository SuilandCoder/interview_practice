let createTree = require('./CreateTree')

let root = createTree();

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 * * 广度优先
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder_BFS = function (root) {
    let queue = [];
    let number = [];
    if (!root) return number;
    queue.push(root);
    while (queue.length > 0) {
        let len = queue.length;
        let lvl = []
        while (len) {
            let cur = queue.shift();        
            lvl.push(cur.val);
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
            len--;
        }
        number.push(lvl);
    }
    return number;
};

console.log(levelOrder_BFS(root));


/**
 * * 深度优先
 * @param {}} root 
 */
var levelOrder_DFS = function (root) {
    let res = [];
    if(!root) return res;
    dfs(root,0,res);
    return res;
};

var dfs = function(root,lvl,res){
    if(root){
        if(!res[lvl]) res[lvl] = [];
        res[lvl].push(root.val);
        dfs(root.left,lvl+1,res);
        dfs(root.right,lvl+1,res);
    }
}
console.log(levelOrder_DFS(root));