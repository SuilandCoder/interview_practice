function getNext(str, next) {
    next[0] = -1;
    let i = 0, j = -1;
    let chars = str.split("")
    while (i < str.length) {
        if (j == -1 || chars[i] == chars[j]) {
            ++i;
            ++j;
            next[i] = j;
        } else {
            j = next[j]
        }
    }
    return next;
}

function kmp(str1, str2) {
    let i = 0, j = 0;
    let next = [];
    getNext(str2, next);
    console.log(next);
    while (i < str1.length && j<str2.length) {
        if(j==-1 || str1[i]==str2[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }
    if(j==str2.length){
        return i-j;
    }else{
        return -1;
    }

}
let a = "qw"
// next = []
// getNext(a, next);
// console.log(next);
let b = "eidwqooo"
console.log(kmp(b,a))