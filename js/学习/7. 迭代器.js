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
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


function *createIterator(items){
    for(let i=0; i<items.length;i++){
        yield items[i];
    }
}

let iterator2 = createIterator([1,2,3]);
// console.log(iterator2.next().value);

//* 简单任务执行器：
function run(taskDef){
    //* 创建一个无使用限制的迭代器
    let task = taskDef();

    //* 开始执行任务
    let result = task.next();

    function step(){
        if(!result.done){
            result = task.next();
            step();
        }       
    }
    step();
}

run(function*(){
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
})