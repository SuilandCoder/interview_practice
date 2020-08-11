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
 * * 前序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let depth = 1;
    function preOrder(root,lvl){
        if(!root) return;
        depth = Math.max(depth,lvl);
        preOrder(root.left,lvl+1);
        preOrder(root.right,lvl+1);
    }
    preOrder(root,depth);
    return depth;
};

/**
 * * 后序遍历
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function(root) {
    if(!root) return 0;
    leftDepth = maxDepth2(root.left);
    rightDepth = maxDepth2(root.right);
    return Math.max(leftDepth,rightDepth) + 1;
};
console.log(maxDepth2(root));