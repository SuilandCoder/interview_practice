let createTree = require('./CreateTree')

let root = createTree();


/**
 * * 前序遍历二叉树
 * @param {*} root 
 */
function preOrderTraversal(root){
    let number = [];
    let stack = [];
    let handleTag = Symbol('HandleTag');
    if(!root) return number;
    stack.push(root);
    while(stack.length>0){
        let cur = stack.pop();
        if(cur===handleTag){
            number.push(stack.pop().val);
        }else{
            if(cur.right){stack.push(cur.right)}; //* 右子树先入栈
            if(cur.left){stack.push(cur.left)}; //* 左子树后入栈
            stack.push(cur);    //* 根入栈
            stack.push(handleTag); //* 处理标识
        }
    }
    return number;
}


/**
 * * 中序遍历二叉树
 * @param {} root 
 */
function inOrderTraversal(root){
    let number = [];
    let stack = [];
    let handleTag = Symbol('HandleTag');
    if(!root) return number;
    stack.push(root);
    while(stack.length>0){
        let cur = stack.pop();
        if(cur===handleTag){
            number.push(stack.pop().val);
        }else{
            if(cur.right){stack.push(cur.right)}; //* 右子树先入栈
            stack.push(cur);    //* 根入栈
            stack.push(handleTag); //* 处理标识
            if(cur.left){stack.push(cur.left)}; //* 左子树后入栈
        }
    }
    return number;
}

/**
 * * 后序遍历二叉树
 * @param {} root 
 */
function postOrderTraversal(root){
    let number = [];
    let stack = [];
    let handleTag = Symbol('HandleTag');
    if(!root) return number;
    stack.push(root);
    while(stack.length>0){
        let cur = stack.pop();
        if(cur===handleTag){
            number.push(stack.pop().val);
        }else{
            stack.push(cur);    //* 根入栈
            stack.push(handleTag); //* 处理标识
            if(cur.right){stack.push(cur.right)}; //* 右子树先入栈
            if(cur.left){stack.push(cur.left)}; //* 左子树后入栈
        }
    }
    return number;
}


console.log(preOrderTraversal(root));
console.log(inOrderTraversal(root));
console.log(postOrderTraversal(root));