/**
 * *请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。
 * *例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
 */


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) { 
    let sum1 = 0;
    while(n>0){ 
        n = n&(n-1);
        sum1++;
    }
    return sum1;
};

// hammingWeight()


//* 方法二
var hammingWeight2 = function(n) {      
    return !n?n:n.toString(2).match(/[1]/g).length; 
};