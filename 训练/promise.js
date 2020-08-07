let fs = require('fs');

function readFile(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,content)=>{
            if(err){
                reject(err);
                return;
            }
            //* 成功读取文件
            resolve(content);
        })
    })
}

let rejected;
rejected = Promise.reject(new Error('Explosion'));

process.on('unhandledRejection',(reason,promise)=>{
    console.log(reason.toString());
    console.log(promise===rejected);
})

let p1 = new Promise((resolve,reject)=>{
    // resolve(42);
    reject(42);
})

p1.then(value=>{
    console.log(value);
    return value+1;
}).then(value=>{
    console.log(value);
}).catch(err=>{  // 直接 .catch 处理，不会被unhandledRefection 捕获到    
    console.log(err+"sdafadsf") 
    return err;
}).then(value=>{
    console.log(value+1);
})

p1.catch(err=>{  
    console.log(err+"sdafadsf") 
})

let p2 = new Promise((resolve,reject)=>{
    resolve(10);
})

p2.then(value=>{
    console.log(value);

    //* 创建一个新的promise
    let p3 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(100)
        }, 2000);
    })
    return p3;
}).then(value=>{ //* p3 执行完毕后，才会执行这个then方法；
    console.log(value);
})