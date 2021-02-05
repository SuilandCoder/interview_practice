/*
 * @Description: 实现 filter
 * @Author: SongJ
 * @Date: 2021-02-05 16:30:53
 * @LastEditTime: 2021-02-05 17:03:43
 * @LastEditors: SongJ
 */

 console.log([1,2,3].filter((v,i,array)=>{
     if(v%2==0){
         return v;
     }
 }))

 
 const selfFilter = function(fn,context){
     const array = Array.prototype.slice.call(this);
     const resArr = Array();
     for(let i=0;i<array.length;i++){
         if(!array.hasOwnProperty(i)) continue;
         fn.call(context,array[i],i,array) && resArr.push(array[i]);
     }
     return resArr;
 }

 Object.defineProperty(Array.prototype,'selfFilter',{
     value:selfFilter,
     writable:true,
     configurable:true
 })

let b=  [1,2,5,8,12,3].selfFilter((v,i,array)=>{
    if(v%2==0){
        return v;
    }
})

console.log(b)


//* reduce 实现 filter 方法：
const reduceFilter=function(fn,context){
    const array = Array.prototype.slice.call(this);
    return array.reduce((p,v,i)=>{
        return fn.call(context,v,i,array)?[...p,v]:[...p]
    },[])
}

Object.defineProperty(Array.prototype,'reduceFilter',{
    value:reduceFilter,
    writable:true,
    configurable:true
})

let c=  [1,2,5,8,12,3].reduceFilter((v,i,array)=>{
    if(v%2==0){
        return v;
    }
})
console.log(c)