/**
 * #* 数据类型
 * 1. 基本数据类型
 *      1. number：任意数字
 *      2. string：任意字符串
 *      3. boolean：true/false/
 *      4. undefined: undefined
 *      5. null: null
 *      6. Symbol
 * 
 * 2. 引用数据类型
 *      1. Object
 *      2. Function
 *      3. Array
 */


 /**
  * #* 判断方式
  * 
  * 1. typeof
  *     返回数据类型的 字符串表达！！！
  *     可以判断：undefined、数值、字符串、boolean
  * 2. instanceof
  *     判断对象的具体类型
  * 3. ===
  *     可以判断：undefined、null
  */

var a;
console.log(a, typeof(a)==='undefined', a===undefined); // undefined true true

var b = null;
console.log(typeof(b), typeof b ==='null') //object false   typeof(null) 返回 object！！！
console.log(b===null)// true

