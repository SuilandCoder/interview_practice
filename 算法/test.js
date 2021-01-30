function bfind(arr, val) {
    let right = arr.length - 1;
    let left = 0;
    while (left <= right) {
        let mid = Math.floor((right + left)/2);
        if (arr[mid] < val) {
            left = mid + 1;
        } else if (arr[mid] > val) {
            right = mid-1;
        }else{
            return mid;
        }
    }
    return -1;
}

let a = [1,2,3,4,5,7,8,9]

console.log(bfind(a,6))