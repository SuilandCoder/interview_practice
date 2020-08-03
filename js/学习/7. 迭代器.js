//* ES 5 模拟生成器：
function createIterator(items){
    var i = 0;
    return {
        next:function(){
            let done = i<items.length?false:true;
            let value = done?undefined:items[i++];
            return {done:done,value:value};
        }
    }
}

let iterator = createIterator([3,4,5]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());








function *createIterator(items){
    for(let i=0; i<items.length;i++){
        yield items[i];
    }
}

let iterator2 = createIterator([1,2,3]);
console.log(iterator2.next().value);