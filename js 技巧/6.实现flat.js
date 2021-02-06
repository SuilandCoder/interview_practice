const myFlat = function(depth=1){
    const array = Array.prototype.slice.call(this);
    if(depth==0) return array;
    return array.reduce((p,cur,i)=>{
        if(Array.isArray(cur)){
            return [...p,...myFlat.call(cur,depth-1)];  // * 关键步骤！！！
        }else{
            return [...p,cur];
        }
    },[])
}

Object.defineProperty(Array.prototype,'myFlat',{
    value:myFlat,
    writable:true,
    configurable:true
})

console.log([1,2,3,[[2,3]]].myFlat(Infinity));