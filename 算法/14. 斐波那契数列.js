
'use strict'
/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * 
 * 示例一： 输入：n=2，输出：1
 * 示例二： 输入：n=5，输出5
 */



 //* 一：尾调用
 var fib = function(n,current=0,next=1){
     if(n===0) return 0;
     if(n===1) return next;
     return fib(n-1,next,current+next);
 }
//  console.log(fib(45))

//* 柯里化函数：数组缓存
var fibonacci = function(){
    let tmp = [0,1]
    return function(n){
        let result = tmp[n];
        if(typeof result!=='number'){
            result = fibonacci(n-1)+fibonacci(n-2);
            tmp[n] = result;
        }
        return result;
    }
}();
// console.log(fibonacci(45));

//* 直接递归 -> 超时
var fib_low = function(n){
    if(n===0 || n===1){
        return n;
    }
    return fib_low(n-1)+fib_low(n-2);
}
// console.log(fib_low(45));

//* 遍历
var fib_fast = function(n){
    if(n===0 || n===1) return n;
    let first = 0;
    let second = 1;
    for(let i=2;i<n;i++){
        let tmp = first;
        first = second;
        second  = tmp + second;
    }
    return (first + second)%(1e9+7);
}
console.log(fib_fast(45))