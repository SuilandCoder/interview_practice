/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 */

var getRow = function(rowIndex){
    if(rowIndex===0){
        return [1];
    }
    let arrUp = getRow(rowIndex-1);
    let arrCur = [1]
    for(let i=1;i<rowIndex;i++){
        arrCur.push(arrUp[i-1]+arrUp[i]);
    }
    arrCur.push(1);
    return arrCur;
}

console.log(getRow(2));