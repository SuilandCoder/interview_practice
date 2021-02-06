// let arr = [20,13,85,16,25,23,56,9,14,81];
let arr = []
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000));
}

console.log("测试数据:", arr);


function fastSort(arr) {
    let len = arr.length;

    function innerFunc(arr, l, r) {
        let partitionIndex = l;
        if (l >= r) return arr;
        partitionIndex = myPartition(arr, l, r);
        if (l < r) {
            innerFunc(arr, l, partitionIndex - 1);
            innerFunc(arr, partitionIndex + 1, r);
        }

        return arr;
    }

    innerFunc(arr, 0, len - 1);
    return arr;
}


function myPartition(arr, left, right) {
    while (left < right) {
        while (arr[left] <= arr[right]) {
            right--;
        }
        if (left >= right) break;
        [arr[left], arr[right]] = [arr[right], arr[left]];

        while (arr[right] > arr[left]) {
            left++;
        }
        if (left >= right) break;
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    return left===right?left:left;
}

var start = Date.now();
console.log(fastSort(arr));
var end = Date.now();
console.log("我的算法耗时：", end - start);

