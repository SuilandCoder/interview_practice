/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2021-02-05 17:13:38
 * @LastEditTime: 2021-02-05 17:15:16
 * @LastEditors: SongJ
 */

console.log([1,2,3].some((v,i,array)=>{
    if(v%2==0){
        return true;
    }
}))


const selfSome = function(fn,context){
    const array = Array.prototype.slice.call(this);
    //const resArr = Array();
    let len = array.length;
    if(len==0) return false;
    for(let i=0;i<array.length;i++){
        if(!array.hasOwnProperty(i)) continue;
        if(fn.call(context,array[i],i,array)){
            return true;
        }
    }
    return false;
}

Object.defineProperty(Array.prototype,'selfSome',{
    value:selfSome,
    writable:true,
    configurable:true
})

console.log([1,2,3].selfSome((v,i,array)=>{
    if(v%2==0){
        return true;
    }
}))


console.log([].every(v=>{v>1000}))  //* true 当数组为空时， every返回true