// Definition for a binary tree node.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 let createTree = function (){
    let root = new TreeNode(1);
    node2 = new TreeNode(2);
    node3 = new TreeNode(3);
    
    node4 = new TreeNode(4);
    node5 = new TreeNode(5);
    
    node6 = new TreeNode(6);
    
    node2.left = node4;
    node2.right = node5;
    
    node3.right = node6;
    
    root.left = node2;
    root.right = node3;
    return root;
}

module.exports = createTree;

