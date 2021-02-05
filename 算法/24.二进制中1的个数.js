/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2021-02-05 13:17:02
 * @LastEditTime: 2021-02-05 13:21:29
 * @LastEditors: SongJ
 */
function NumberOf1(n)
{
    // write code here
    if(n>2**31 || n<(-1*2**31)){
        return null 
    }
    let pow_tag = 31;
    let num_of_one = 0;
    while(n>0){
        if(n===1) return num_of_one+1;
        while(n<2**pow_tag){
            pow_tag--;
        }
        n = n-2**pow_tag;
        num_of_one++;
    }
    
    return num_of_one;
}

console.log(NumberOf1(65));
