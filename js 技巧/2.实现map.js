/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2021-02-05 14:36:57
 * @LastEditTime: 2021-02-05 16:30:32
 * @LastEditors: SongJ
 */

 /**
  * 疑惑的地方：
  *     Array.prototype.slice.call(this); 目的是防止传入的不是Array的实例，例如document获取的标签列表就是 NodeList类型；
  *     但是 自定义的方法是定义在 Array.prototype 上面的，如果不是Array的实例，是根本调用不了这个方法的呀。例如 "123".selfMap(...) 就会报没有selfMap这个方法
  * 
  * 解答：如果把selfMap方法定义到 String.prototype上就可以啦。
  */

 
const selfMap = function(fn,context){ //此处的context为第一个参数回调中的 this 指向，如果第一个参数为箭头函数，那设置第二个 this 会因为箭头函数的词法绑定而失效
    const array = Array.prototype.slice.call(this);  //此处这样写是防止 this 不是数组，例如 selfMap如果挂载到 String.prototype上，"213".selfMap(...)，其中 this="213"就不是Array对象
    const newArr = Array();
    for(let i=0;i<array.length;i++){
        // 处理稀疏矩阵
        if(!array.hasOwnProperty(i)) continue;
        newArr[i] = fn.call(context,array[i],i,array)
        // newArr.push(newVal);
    }
    return newArr;
}

Object.defineProperty(Array.prototype,'selfMap',{
    value:selfMap,
    writable:true,
    configurable:true,
})

console.log([1,5,12].selfMap((v,i)=>v+4))


//* 使用 reduce 实现map
const reduceMap = function(fn,context){
    const array = Array.prototype.slice.call(this);
    return array.reduce((pre,cur,index)=>{
        return [...pre,fn.call(context,cur,index,array)];
    },[]);
}

Object.defineProperty(Array.prototype,'reduceMap',{
    value:reduceMap,
    writable:true,
    configurable:true
})

Object.defineProperty(String.prototype,'reduceMap',{
    value:reduceMap,
    writable:true,
    configurable:true
})

console.log([12,51,6].reduceMap((v,i)=>v*2));

console.log("123235".reduceMap((v,i)=>v*2));