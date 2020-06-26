const set = new Set([1,2,23,4,5,6,4])
console.log(set.size)

let newSet = [...new Set('ababbc')].join()
console.log(newSet)

if(NaN===NaN){
    console.log("相等")
}else{
    console.log("不相等");
}

const setFunc = new Set();
setFunc.add(1);
setFunc.add("abc");
let obj = {a:1}
setFunc.add(obj);
setFunc.add(function say(){console.log("hello world")});
console.log([...setFunc])
console.log(setFunc.has("abc"))
console.log(setFunc.delete("abc"));
console.log([...setFunc])
for(let item of setFunc){
    console.log(item);
}

function dedupe(array){
    return Array.from(new Set(array))
}

console.log(dedupe([1,2,3,4,5,3,2,1]))

console.log([...setFunc.entries()])

setFunc.forEach(item=>{
    console.log(item)
})
