/**
 * add(1)(2)(3).sum();
 * add(1,2).sum();
 * add(1,2)(3).sum();
 */

 //* 方法一：
 function add(...args){
     let tmpArgs = args;
     let fn = function(...inner_args){
        tmpArgs = tmpArgs.concat(inner_args); 
        return fn;
     }
     fn.sum = function(){
        return tmpArgs.reduce((p,v)=>{
            return p+v;
        })
     }
     return fn;
 }


 //* 方法二： 立即调用函数
 //! 立即调用函数会导致变量不释放，多次调用结果累加。
let add1 = function(){
    let tmpArgs = [];
    let fn = function(...args){
        tmpArgs = tmpArgs.concat(args);
        return fn;
    }
    fn.sum = function(){
        return tmpArgs.reduce((p,v)=>{
            return p+v;
        })
     }
     return fn;
}()

let add2 = function(){
    let result = 0;
    const innerAdd = function(y){
        result += [...arguments].reduce((p,v)=> p+v);
        return innerAdd;
    }
    innerAdd.sum = ()=> result;
    return innerAdd;
}()



 console.log(add2(1,2)(2,3,4).sum());
 console.log(add2(1,2,3)(4).sum());