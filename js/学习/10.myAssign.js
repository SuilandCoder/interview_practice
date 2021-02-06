/*
 * @Description:  实现 Object.assign
 * @Author: SongJ
 * @Date: 2021-02-03 23:01:38
 * @LastEditTime: 2021-02-05 15:06:12
 * @LastEditors: SongJ
 */

/**
 * Object.assign 用于将所有可枚举属性的值从一个或多个源对象分配到目标对象，并返回目标对象
 */

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);


//* 先判断 Object 上是否已经定义了该方法
if (typeof Object.myassign !== 'function') {
    Object.defineProperty(Object, 'myassign', {  // 若直接挂载： Object.myassign= function(){}，则该属性是可枚举的，但是这里需要不可枚举
        value: function (target) {
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            let to = Object(target);
            for (let index = 1; index < arguments.length; index++) {
                let nextSource = arguments[index];
                if (nextSource != null) {
                    let nextSourceObj = Object(nextSource);
                    for (let nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                        // 直接使用nextSourceObj.hasOwnProperty 会存在一个问题，因为有的对象可能没有连接到Object.prototype上（比如通过Object.create(null)来创建），这种情况使用使用nextSourceObj.hasOwnProperty就会报错
                        // if(nextSourceObj.hasOwnProperty(nextKey)){
                        //     to[nextKey] = nextSourceObj[nextKey];
                        // }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    })
}


let a = {
    name: "advanced",
    age: 18
}
let b = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}


// 以上是照着敲的，自己再写一遍
if (typeof Object.myassign2 !== 'function') {
    Object.defineProperty(Object, 'myassign2', {
        value: function (target) {
            if (target == null) {
                throw new TypeError("sdf");
            }
            let to = Object(target);
            for (let index = 1; index < arguments.length; index++) {
                let nextSource = arguments[index];
                if (nextSource != null) {
                    for (let nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey]
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true,
    })
}

// let c = Object.myassign2(a, b);
// console.log(c)


 
//* 先判断 Object 上是否已经定义了该方法
if (typeof Object.myassign3 !== 'function') {
    Object.prototype.myassign3 = function (target) { // 用prototype挂载也是可枚举的
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        let to = Object(target);
        for (let index = 1; index < arguments.length; index++) {
            let nextSource = arguments[index];
            if (nextSource != null) {
                let nextSourceObj = Object(nextSource);
                for (let nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                    // 直接使用nextSourceObj.hasOwnProperty 会存在一个问题，因为有的对象可能没有连接到Object.prototype上（比如通过Object.create(null)来创建），这种情况使用使用nextSourceObj.hasOwnProperty就会报错
                    // if(nextSourceObj.hasOwnProperty(nextKey)){
                    //     to[nextKey] = nextSourceObj[nextKey];
                    // }
                }
            }
        }
        return to;
    }
}

// let c = Object.myassign3(a, b);
// console.log(c)

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'myassign3'))  // 证明还是可枚举的