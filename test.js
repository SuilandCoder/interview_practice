/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2020-08-07 21:29:57
 * @LastEditTime: 2021-02-06 19:46:04
 * @LastEditors: SongJ
 */
/**
 * add(1)(2)(3).sum();
 * add(1,2).sum();
 * add(1,2)(3).sum();
 */


 /**
  * 如何实现上面函数的功能？
  * 
  * add每次返回一个保存所有参数的函数，并且返回的函数具有 sum方法；
  * 
  */
 const add = function(...args){
     let _args = [...args];
     let saveArgs = function(...args2){
         _args = [..._args,...args2];
         return saveArgs;
     }

     saveArgs.sum = function(){
         let total = _args.reduce((p,v)=>{
             return p+v;
         });
         return total;
     }
     return saveArgs;
 }
//  console.log(add(1)(2)(3).sum());


function curry(fn, args) {
    var length = fn.length;

    args = args || [];

    return function() {

        var _args = args.slice(0);
        for (let i = 0; i < arguments.length; i++) {

            // arg = arguments[i];

            _args.push(arguments[i]);

        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}


var toArr = curry(function(a, b, c) {
    console.log([a, b, c]);
});

// toArr("a", "b", "c") // ["a", "b", "c"]
toArr("a", "b")("c") // ["a", "b", "c"]
// toArr("a")("b")("c") // ["a", "b", "c"]
// toArr("a")("b", "c") // ["a", "b", "c"]
