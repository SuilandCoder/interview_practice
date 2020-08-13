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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    return dfs(root, sum);
};

var dfs = function(root,sum){
    if(!root.left & !root.right & sum===root.val) return true;
    let leftRes = false;
    let rightRes = false;
    if(root.left){
        leftRes = dfs(root.left,sum-root.val);
    }
    if(root.right){
        rightRes = dfs(root.right,sum-root.val);
    }
    return leftRes || rightRes;
}

console.log(hasPathSum(root,10));