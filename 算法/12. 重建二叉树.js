/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
 *   前序遍历 preorder = [3,9,20,15,7]
 *   中序遍历 inorder = [9,3,15,20,7]
 *   生成二叉树：
 *       3
 *      / \
 *     9  20
 *       /  \
 *      15   7
 */

 function TreeNode(val){
     this.val = val;
     this.left = this.right = null;
 }

 /**
  * 
  * @param {number[]} preorder 
  * @param {number[]} inorder 
  * @return {TreeNode}
  */
 var buildTree = function(preorder,inorder){
    if(preorder.length){
        let newNode = new TreeNode;
        newNode.val = preorder[0];
        let leftInorder = inorder.slice(0,inorder.indexOf(preorder[0]));
        let leftPreorder = preorder.slice(1,leftInorder.length+1);
        let rightInorder = inorder.slice(inorder.indexOf(preorder[0])+1);
        let rightPreorder = preorder.slice(leftInorder.length+1);
        newNode.left = buildTree(leftPreorder,leftInorder);
        newNode.right = buildTree(rightPreorder,rightInorder);
        return newNode;
    }
    return null;
 }

 //* 上面的 slice 函数耗时长，使用下标记录位置
 var buildTree_fast = function(preorder,inorder,preLeft,preRight,inLeft,inRight){
    if(typeof preLeft !=='number'){
        preLeft = 0;
        preRight = preorder.length - 1;
        inLeft = 0;
        inRight = inorder.length - 1;
    }
    if(preLeft>preRight || inLeft>inRight){
        return null;
    }
    let cur_root_index = 0;
    for(let i=0;i<inorder.length;i++){
        if(inorder[i]===preorder[preLeft]){
            cur_root_index = i;
            break;
        }
    }
    let llen = cur_root_index-inLeft;
    let rlen = inRight - cur_root_index;
    let newNode = new TreeNode;
    newNode.val = preorder[preLeft];
    newNode.left = buildTree_fast(preorder,inorder,preLeft+1,preLeft+llen,inLeft,cur_root_index-1);
    newNode.right = buildTree_fast(preorder,inorder,preLeft+llen+1,preLeft+llen+rlen+1,cur_root_index+1,inRight);
    return newNode;
 }



 var preorder_print = function(treeNode){
    if(treeNode){
        console.log(treeNode.val);
        preorder_print(treeNode.left);
        preorder_print(treeNode.right);
    }
 }


 var inorder_print = function(treeNode){
    if(treeNode){
        inorder_print(treeNode.left);
        console.log(treeNode.val);
        inorder_print(treeNode.right);
    }
 }

 let tree = buildTree_fast([3,9,20,15,7],[9,3,15,20,7])
 preorder_print(tree);
