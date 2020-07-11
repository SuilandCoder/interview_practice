/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例1：
 * 输入: "abcabcbb" 输出: 3  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例2：
 * 输入: "bbbbb" 输出: 1 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例3：
 * 输入: "pwwkew" 输出: 3 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

 let a = "bbbbb";

 var lengthOfLongestSubstring = function(s){
     let chars = s.split("");
     let front = 0,end = 1;
     let substring = new Set();
     substring.add(chars[0])
     let current_num = 1;
     let longest_num = 1;
     while(front<s.length-longest_num){
         if(substring.has(chars[end])){
            substring.clear();
            front++;
            current_num = 1;
            end = front + 1;
            substring.add(chars[front]);
            
         }else{
            substring.add(chars[end]);
             end++;
             current_num = end-front;
             if(current_num>longest_num){
                 longest_num = current_num;
             }
         }
     }
     return longest_num;
 }
 console.log(lengthOfLongestSubstring(a));