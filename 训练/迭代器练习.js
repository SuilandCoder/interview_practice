let colors = ['red','black','white','green'];
let tracking = new Set([123,456,789]);
let data = new Map();
data.set('title','Understanding');
data.set('format','ebook');
data.set('1','sdf');
data.set('abv','abag');
data.set('2','ebooagk');
data.set('bac','sdafaba');
// for(let entry of colors.entries()){
//     console.log(entry)
// }

// for(let entry of tracking.entries()){
//     console.log(entry)
// }

// for(let entry of data.entries()){
//     console.log(entry)
// }
// console.log(data.get('title'))

for(let value of data.keys()){
    console.log(value)
}

console.log(data.keys())

let ac = Symbol("sdfa")
let obj = {[ac]:"1aaff","abc":"vasdf",1:"fdsFfd","2":'ssdf',"bad":'sdf'};
console.log(Object.keys(obj))  //* Object.keys() 获取不到 Symbol对象 key值

for(let key in obj){
    console.log(key);
} 


var message = "A 集 B"
for(let c of message){ 
    console.log(c);
}

//* 给迭代器传参数
function *createIterator(){
    let first = yield 1;
    console.log(first);
    let second = yield first+2;
    console.log(second);
    yield second+4;
}

let iterator = createIterator();
iterator.next();
console.log(iterator.next(3))
console.log(iterator.next(2))