const selfReduce = function(fn,preV,context){
    const array = Array.prototype.slice.call(this);
    if(!preV && array.length>0){
        preV = array[0];  //!会有缺陷:如果array是稀疏数组，第一个元素就可能不是0；
    }
    for(let i=1;i<array.length;i++){
        let curV = array[i];
        preV = fn.call(context,preV,curV,i,array)
    }
    return preV;
}

Object.defineProperty(Array.prototype,'selfReduce',{
    value:selfReduce,
    writable:true,
    configurable:true
})

console.log([1,2,3].selfReduce((p,v,i)=>{
    return p+v;
},10))



const selfReduce2 = function(fn,initialV){
    const array = Array.prototype.slice.call(this);
    let startIndex = 0;
    if(initialV===undefined){
        for(let i=0;i<array.length;i++){
            if(array.hasOwnProperty(i)){ // 如果array是稀疏数组，第一个元素就可能不是0；
                initialV = array[i]
                break;
            } 
            startIndex++;
        }
    }
    for(let i=++startIndex||0;i<array.length;i++){
        if(!array.hasOwnProperty(i)) continue;
        initialV = fn.call(null,initialV,array[i],i,array);
    }
    return initialV;
}

Object.defineProperty(Array.prototype,'selfReduce2',{
    value:selfReduce2,
    writable:true,
    configurable:true
})

console.log([1,2,3].selfReduce((p,v,i)=>{
    return p+v;
},10))