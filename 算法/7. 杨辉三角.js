/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 *  输入: 5
    输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 * 
 */

 /**
  * 
  * @param {number} numRows 
  */
 var generate = (numRows)=>{
    if(numRows===0){
        return []
    }
    if(numRows===1){
        return [[1]]
    }
    let number = generate(--numRows);
    let arrUp = number[number.length - 1];
    let arrCur = [1];
    for(let i=1;i<numRows;i++){
        arrCur.push(arrUp[i]+arrUp[i-1]);
    }
    arrCur.push(1);
    number.push(arrCur);
    return number;
 }

 console.log(generate(5))