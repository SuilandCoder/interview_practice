let arr = [1,2,3,4,5,4,3,2];
var newArr = arr.reduce(function (prev, cur) {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
},[]);
console.log(newArr)

var myArr = arr.reduce((pre,cur,index,arr)=>{
    pre.indexOf(cur)===-1 && pre.push(cur);
    return pre;
},[])

console.log(myArr);