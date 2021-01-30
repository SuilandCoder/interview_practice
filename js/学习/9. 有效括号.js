/**
 * @param {string} s
 * @return {boolean}
 */

const obj = {
    "(": ")",
    "{": "}",
    "[": "]"
}
var isValid = function (s) {
    if(s.length===0)
        return true;
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(obj.hasOwnProperty(s[i])){
            stack.push(s[i]);
        }else{
            if(stack.length===0)
                return false;
            let char = stack.pop();
            if(obj[char]!==s[i]){
                return false;
            }
        }
    }
    if(stack.length>0){
        return false;
    }
    return true;
};

let val = isValid('()');
console.log(val);