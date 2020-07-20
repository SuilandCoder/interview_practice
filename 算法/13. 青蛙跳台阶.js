/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */

 var numWays = function(n){
     if(n===1 || n===0){
         return 1;
     }
     if(n==2){
         return 2;
     }
 }

 //* 柯里化函数保存中间结果
 var numWays_fast = function(){
    let tmp = [1,1,2];
    return function(n){
        let result = tmp[n];
        if(typeof result!=='number'){
            result = numWays_fast(n-1)+numWays_fast(n-2);
            tmp[n] = result;
        }
        return result%(1e9+7);
    }
 }();

//  console.log(numWays_fast(45));
 console.log(Math.min.apply(this,[1,3,5]));