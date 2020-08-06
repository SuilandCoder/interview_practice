function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//* 数组生成 二叉树 [1, null, 2, 3]
/**
 *    1
       \
        2
       /
      3
 */

function createTree_fromArray(array) {
    if (array instanceof Array === false) {
        return null;
    }
    if (array.length === 0) {
        return null;
    }
    let head = new TreeNode(array[0]);
    let stack = [];
    for (let i = 1; i < array.length; i++) {

    }
}

/**
* @param {TreeNode} root
* @return {number[]}
*/
var preorderTraversal = function (root) {
    let number = [];
    let stack = [];
    let visited = new Set();
    if (root === null) {
        return number;
    }
    let cur = root;
    while (cur || stack.length > 0) {
        if (!visited.has(cur)) {
            number.push(cur.val); //* 入栈时记录，操作起来不方便
            stack.push(cur);
            visited.add(cur);
        }
        if (cur.left && !visited.has(cur.left)) {
            cur = cur.left;
        } else if (cur.right && !visited.has(cur.right)) {
            cur = cur.right;
        } else {
            cur = stack.pop();
        }
    }
    return number;
};

/**
* @param {TreeNode} root
* @return {number[]}
*/
var preorderTraversal_2 = function (root) {
    let number = [];
    let stack = [];
    if (root === null) {
        return number;
    }
    stack.push(root);
    while(stack.length>0){
        let cur = stack.pop();
        number.push(cur.val); //* 出栈时记录，好处理
        if(cur.right) stack.push(cur.right);
        if(cur.left) stack.push(cur.left);
    }
    return number;
};