
/**
 *  //* 标签模板 -> 模板字面量前面的标签函数，用来处理模板字面量
 * @param {*} literals  数组：第一个占位符前的空字符串（"")；第一二个占位符之间的字符串(" item cost $")；第二个占位符后的字符串（"."）;
 * @param  {...any} substitutions 数组：[10,0.25]
 */
function passthru(literals,...substitutions){
    let result = "";

    for(let i=0;i<substitutions.length;i++){
        result+=literals[i];
        result+=substitutions[i];
    }

    result += literals[literals.length-1];

    return result;
}

let count = 10,
    price = 0.25,
    message = passthru`${count} items cost $${(count*price).toFixed(2)}`

console.log(message);