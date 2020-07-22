/**
 * *地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * *一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * *也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，
 * *因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0,
        curRow = 0,
        curCol = 0;
    function move(m,n,k,curRow,curCol,visited){
        let key = `${curRow}-${curCol}`
        if(curRow<0 || curCol<0 || curRow>=m || curCol>=n || (getSum2(curRow)+getSum2(curCol))>k||visited[key]){
            return 0;
        }
        visited[key]=true;
        return 1 + move(m,n,k,curRow+1,curCol,visited)+ move(m,n,k,curRow-1,curCol,visited)+ move(m,n,k,curRow,curCol+1,visited) + move(m,n,k,curRow,curCol-1,visited);
    }
    count = move(m,n,k,curRow,curCol,{});
    console.log(count);
    return count;
};

//* 获取数位之和: 不考虑负数，非整数
function getSum(num){
    let numArr = num.toString().split("");
    return numArr.reduce((p,v)=>Number(p)+Number(v),0);
}

//* 获取数位之和：
function getSum2(num){
    let sum = 0;
    while(num){
        sum += num%10;
        num = Math.floor(num/10);
    }
    // console.log(sum);
    return sum;
}
// getSum2(1213)
movingCount(11,8,16);