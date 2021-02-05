/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2021-02-05 17:13:38
 * @LastEditTime: 2021-02-05 17:15:16
 * @LastEditors: SongJ
 */

console.log([1,2,3].some((v,i,array)=>{
    if(v%2==0){
        return false;
    }
}))