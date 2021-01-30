function minNumberInRotateArray(rotateArray)
{
    // write code here
    if(rotateArray.length===0) return 0;
    let left = 0;
    let right = rotateArray.length-1;
    while(left<right){
        if(rotateArray[left]<rotateArray[right]){
            return rotateArray[left]
        }
        let mid = Math.floor((left+right)/2);
        if(rotateArray[left]<rotateArray[mid]){
            left = mid+1;
        }else if(rotateArray[left]>rotateArray[mid]){
            right = mid;
        }else{
            return rotateArray[right];
        }
    }
    return rotateArray[right]
}

// let test = [3,4,5,6,1,2]
let test = [1,2,3,4,5,6]
console.log(minNumberInRotateArray(test))