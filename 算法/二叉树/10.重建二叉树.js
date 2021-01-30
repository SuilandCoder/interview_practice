function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function rebuildTree(pre,vin){
    let tree = rebuild(pre,vin,0,pre.length-1,0,vin.length-1);
    return tree;
}

function rebuild(pre,vin,pl,pr,vl,vr){
    if(pl>pr || vl>vr){
        return null;
    }
    let k = -1;
    for(let i=vl;i<=vr;i++){
        if(vin[i]===pre[pl]){
            k = i;
            break;
        }
    }
    let llen = k-vl;
    let rlen = vr-k;
    let node = new TreeNode(pre[pl]);
    node.left = rebuild(pre,vin,pl+1,pl+llen,vl,k-1);
    node.right = rebuild(pre,vin,pl+llen+1,pl+llen+rlen+1,k+1,k+rlen);
    return node;
}


function frontTra(tree){
    if(tree!==null){
        console.log(tree.val);
        frontTra(tree.left);
        frontTra(tree.right);
    }
}

function midTra(tree){
    if(tree!==null){
        midTra(tree.left);
        console.log(tree.val);
        midTra(tree.right);
    }
}

function lvlTra(tree){
    let queue = [];
    if(tree!==null){
        queue.push(tree);
    }
    while(queue.length>0){
        let node = queue.shift();
        console.log(node.val);
        if(node.left!==null){
            queue.push(node.left);
        }
        if(node.right!==null){
            queue.push(node.right);
        }
    }
}

let pre = [1,2,3,4,5,6,7];
let vin = [3,2,4,1,6,5,7];
let tree = rebuildTree(pre,vin)
lvlTra(tree)
