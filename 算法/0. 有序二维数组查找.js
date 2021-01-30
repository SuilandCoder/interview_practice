function find(target,array){
    let rows = array.length;
    if(rows===0) return false;
    let cols = array[0].length;
    for(let i=0;i<rows;i++){
        if(array[i][cols-1]<target){
            continue;
        }
        if(array[i][0]>target){
            return false;
        }
        for(let j=0;j<cols;j++){
            let pos = biFind(array[i],target);
            if(pos!=-1) return true;
        }
    }
    return false;
}

function biFind(arr,val){
    let right = arr.length-1;
    let left = 0;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]==val){
            return mid;
        }else if(arr[mid]<val){
            left = mid +1;
        }else{
            right = mid-1;
        }
    }
    return -1;
}


let a = [1,2,8,9]
let arr = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]

console.log(find(9,arr))

// console.log(biFind(a,9))