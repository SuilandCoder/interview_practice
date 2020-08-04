/**
** 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
** 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
** 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
**
*/

//! 动态规划法：
//* 我们考虑最后一步的情况，即最后剪一下，会把绳子分为两部分，且两部分的结果互不影响
//* 定义dp[i]表示长度为 i 的绳子能得到的最大乘积
//* 则 dp[i] 等于 在绳子区间[0, i)之间剪开的两部分乘积最大值
//* 如果剪开位置为k，则区间分为[0, k)和[k, i)两部分
//* 第一部分长度为k, 第二部分长度为i-k
//* 第二部分存在剪和不剪两种情况，剪的时候值为dp[i-k]，不剪的时候取（i-k)
//* dp[i] = max{ k * dp[i-k], k * (i-k)} (2<=k<=i)

//* 2<n<58
function cutStrings(n){
    const dp = new Array(n+1).fill(1);
    for(let i=3;i<=n;i++){
        for(let j=1;j<i;j++){
            dp[i] = Math.max(dp[i],j*dp[i-j],j*(i-j));
        }
    }
    return dp[n];
}

// console.log(cutStrings(10))



/**
 * @param {number}  2<n<1000
 * @return {number}
 */
var cuttingRope = function() {
    let result = [0,1,1,2,4,6,9];
    return function(n){
        if(typeof result[n]==='number'){
            return result[n];
        }else{
            result[n] = (cuttingRope(n-3)*3)%(1e9+7);
            return result[n]%(1e9+7);
        }
    }
}()

console.log(cuttingRope(30))