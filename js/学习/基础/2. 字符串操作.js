/*
 * @Description: 
 * @Author: SongJ
 * @Date: 2021-01-07 12:50:24
 * @LastEditTime: 2021-01-07 22:58:10
 * @LastEditors: SongJ
 */


 function printGap(str){
     console.log("\n************ "+str+" ************")
 }

 function log(str){
     console.log(str)
 }

 printGap("1. 字符方法")
 /**
  * 1. 字符方法
  *     - charAt        以单字符字符串的形式返回给定位置的那个字符
  *     - charCodeAt    获取到的不是字符而是字符编码
  */
var str = 'hello world'

log(str.charAt(1));     // e
log(str.charCodeAt(1)); //101


printGap("2.拼接  concat")
/**
 * 2. concat: 
 *      - 不改变原来字符串
 *      - 接收任意多个参数
 * 
 * 实践中大都使用 + 操作符
 */
var res = str.concat(' SongJ');
log(str);
log(res);
var res2 = str.concat(' SongJ and ZhangRM')
log(res2)
log(str+' SongJ and ZhangRM');


printGap("3. 获取子串  slice substring substr")
/**
 * 3. slice substring substr: 
 *      - slice:        第一个参数指定子字符串开始位置，第二个参数指定子字符串最后一个字符后面的位置
 *      - substring     同上
 *      - substr        第一个参数指定子字符串开始位置，第二个参数表示返回的字符个数
 * 
 * 如果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置
 * 不会修改字符串本身，只是返回一个基本类型的字符串值
 */
log(str.slice(3));
log(str.substring(3));
log(str.substr(3));
log(str.slice(3,8));
log(str.substring(3,8));
log(str.substr(3,8))
log(str.slice(3,-2));    //!  lo wor
log(str.substring(3,-2)) //!  hel  这个方法会将较小数作为开始位置，较大数作为结束位置，所以相当于调用console.log(str.substring(0,3)); 
log(str.substr(3,-1))    //!  ""    空字符串 


printGap("4. 定位 indexOf lastIndexOf")
/**
 *  4. indexOf lastIndexOf
 *  这两个方法都可以接收两个参数：要查找的子字符串和查找的位置 
 */

log(str.indexOf('l'));      // 2
log(str.lastIndexOf('l'))   // 9
log(str.indexOf('l',5))     // 9    从下标为5的位置开始找
log(str.lastIndexOf('l',5)) // 3    从下标为5的位置往前找

printGap("5. trim")
/**
 *  5. trim
 *  去除字符串前后空格
 */

var str_space = "  hello world  ";
log('('+str_space+')');         //(  hello world  )
log('('+str_space.trim()+')');  //(hello world)


printGap("6. 大小写转换 toLowerCase toUpperCase")

var str_space = "HELLO world";
log(str_space.toUpperCase());
log(str_space.toLowerCase());


printGap("7. 模式匹配方法  match")
/**
 *  match     只接受一个参数，由字符串或RegExp对象指定的一个正则表达式 
 *      - 匹配字符串时，['匹配的字符'，index:匹配结果在字符串中的索引, input:'原始字符串']
 * 
 *      - 匹配正则字符串时
 *          - 没有 g 标识，['匹配的字符'，index:匹配结果在字符串中的索引, input:'原始字符串']
 * 
 *          - 有 g 标识：返回匹配字符串的数组
 */

var mystr="hi,mynameissongjie6,13iswho?";
var matchStr=mystr.match("song");    //["song",index:11,input:"hi,mynameissongjie6,13iswho?"]
log(matchStr)
var matchStr1=mystr.match("Song");    //null
log(matchStr1)
var regexp1=/\d+/g;
var regexp2=/song/g;
var regexp3=/song/;
var matchStr2=mystr.match(regexp1);    //["6","33"]
log(matchStr2)
var matchStr3=mystr.match(regexp2);    //["song"]
log(matchStr3)
var matchStr3=mystr.match(regexp3);    //["song",index:11,input:"hi,mynameissongjie6,13iswho?"]
log(matchStr3)
matchStr3.index    //11
matchStr3.input    //hi,mynameissongjie6,13iswho?


printGap("8. 模式匹配方法  exec")
/**
 *  exec    调用方法与 match 相反：regex.exec(str)
 * 
 *      ['匹配的字符'，index:匹配结果在字符串中的索引, input:'原始字符串']
 */
var mystr="hi,mynameissongjie6,13iswho?";
var regexp1=/song/g;
var regexp2=/song/;
var regexp3=/Song/;
log(regexp1.exec(mystr)) // ["song",index:11,input:"hi,mynameissongjie6,13iswho?"]
log(regexp2.exec(mystr)) // ["song",index:11,input:"hi,mynameissongjie6,13iswho?"]
log(regexp3.exec(mystr)) // null


printGap("9. 模式匹配方法  search")
/**
 *  search    返回字符串中第一个匹配项的索引，如果没有匹配项，返回-1
 */
var mystr="hi,mynameissongjie6,13iswho?";
var regexp1=/song/g;
var regexp2=/song/;
var regexp3=/Song/;
var pattern = 'song'
log(mystr.search(regexp1)) // 11
log(mystr.search(regexp2)) // 11
log(mystr.search(regexp3)) // -1
log(mystr.search(pattern)) // 11


printGap("10. replace")
/**
 *  replace   
 *      - 第一个参数是字符串，只会替换第一个子字符串 
 *      - 第一个参数是正则表达式，会替换所有的子字符串
 */
var str="cat,bat,sat,fat"; 
log(str.replace('at','one'));   // cone,bat,sat,fat
log(str.replace(/at/g,'one'));  // cone,bone,sone,fone


printGap("11. split")
/**
 *  split   基于指定的字符，将字符串分割成字符串数组 
 */
var str="red,blue,green,yellow"; 
log(str.split(','));        // [ 'red', 'blue', 'green', 'yellow' ]
log(str.split());           // [ 'red,blue,green,yellow' ]
log(str.split(''));         // [ 'r',  'e',  'd',  ',',  'b',  'l',  'u',  'e',  ',',  'g',  'r',  'e',  'e',  'n',  ',',  'y',  'e',  'l',  'l',  'o',  'w' ]
log(str.split(",",2));      // ["red", "blue"]  第二个参数用来限制数组大小 
log(str.split(/[^\,]+/));   // ["", ",", ",", ",", ""]  第一项和最后一项为空字符串是因为正则表达式指定的分隔符出现在了子字符串的开头，即"red"和"yellow"
                            // [^...] 不在方括号内的任意字符  只要不是逗号都是分隔符 


printGap("12. localeCompare")
/**
 *  比较两个字符串 
 */
var str="yellow"; 
log(str.localeCompare("brick"));//1 
log(str.localeCompare("yellow"));//0 
log(str.localeCompare("zoo"));//-1 


printGap("13. 字符编码转字符串  fromCharCode")
/**
 *  接收一或多个字符编码，然后将其转换为字符串
 */
log(String.fromCharCode(104,101,108,108,111));//hello 