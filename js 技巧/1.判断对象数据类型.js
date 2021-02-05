/*
 * @Description:  
 * @Author: SongJ
 * @Date: 2021-02-05 14:19:24
 * @LastEditTime: 2021-02-05 14:34:38
 * @LastEditors: SongJ
 */
const isType = function(type){
    return function(target){
        return `[object ${type}]` === Object.prototype.toString.call(target);
    }
}

const isArray = isType('Array');
console.log(isArray(""))

console.log(isType('String')(""))