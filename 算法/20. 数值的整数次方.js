/**
 * 实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。
 *
 *  输入: 2.00000, 10
    输出: 1024.00000

    输入: 2.10000, 3
    输出: 9.26100


    输入: 2.00000, -2
    输出: 0.25000
    解释: 2-2 = 1/22 = 1/4 = 0.25
 */

 /**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let nagetive = n<0;
    let result = absMyPow()(x,Math.abs(n));
    return nagetive?1/result:result;

}

//* 二分法
/**
 * *如果exponent是偶数，Power(base, exponent) = Power(base, exponent / 2) * Power(base, exponent / 2)
 * *如果exponent是奇数，Power(base, exponent) = base * Power(base, exponent / 2) * Power(base, exponent / 2)
 */
function absMyPow(x,n){
    let result = [];
    return function(x,n){
        if(n==0) return 1;
        if(n==1) return x;
        let tmp = result[Math.floor(n/2)];
        if(typeof tmp!=='number'){
            tmp = absMyPow()(x,Math.floor(n/2))
            result[Math.floor(n/2)] = tmp;
        }   
        return n%2?tmp*tmp*x:tmp*tmp;
    }
}


// console.log(myPow(1.00001,123456))

//* 快速幂方法：
function myPow_fast(base,exponent){
    if(exponent===0) return 1;
    if(exponent===1) return base;
    let result = 1;
    let isNagtive = exponent<0;
    exponent = Math.abs(exponent);
    while(exponent){
        //* 如果n最右位是1，将当前x累乘到result
        if(exponent&1){
            result = result*base;
        }
        base = base*base;
        exponent = Math.floor(exponent/2);
    }
    return isNagtive?1/result:result;
}
console.log(myPow_fast(1.00001,123456))