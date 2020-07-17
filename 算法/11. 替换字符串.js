var replaceSpace = function(s) {
    let chars = s.split(" ").join('%20');

    return chars;
};
let a = "hi hello world";
console.log(replaceSpace(a));