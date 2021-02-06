/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2020-07-20 10:48:16
 * @LastEditTime: 2021-02-06 19:56:12
 * @LastEditors: SongJ
 */
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


 /**
  * 实现 柯里化函数构造器：
  */
function curry(fn, args){ 
    let length = fn.length;
    args = args || [];
    return function(){
        let _args = Array.prototype.slice.call(args);
        _args = [...args,...arguments];
        if(_args.length<length){
            return curry.call(this,fn,_args);
        }else{
            return fn.apply(this,_args);
        }
    }
}
  



function trueCurrying(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args)
    }
    return function (...args2) {
        return trueCurrying(fn, ...args, ...args2)
    }
}


var fn = trueCurrying(function(a, b, c) {
    console.log([a, b, c]);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]