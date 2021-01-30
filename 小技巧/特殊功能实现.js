// 1. js 实现 range 函数:
let range_10 = [...Array(10).keys()];
console.log(range_10);

let range_5 = Array.from({length:5},(e,i)=>i);
console.log(range_5);


function Find(target, array)
{
    // write code here
    let rows = array.length;
    if(rows===0) return false;
    let cols = array[0].length;
    // 获取二维数组第一列的数组；
    let col_l = [...Array(rows).keys()].map((v,k)=>{
        return  array[k][0];
    });
    //获取二维数组最后一列的数组；
    let col_r = [...Array(rows).keys()].map((v,k)=> array[k][rows-1]);
}