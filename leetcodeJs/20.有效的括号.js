/*
 * [20] 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：
  1.左括号必须用相同类型的右括号闭合。
  2.左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
 */

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {
//   let stack = []// 长度和数租长度有关 可能会一直增加
//   let obj = { "(":")","[":"]", "{":"}" }

//   for (let i = 0; i < s.length; i++) {
//     const ele = s[i]
//     // 括号匹配
    
//     if(ele in obj){
//       stack.push(ele)
//     }else {
//       if(ele != obj[stack.pop()]){
//         // 不匹配
//         return false
//       }
//     }
    
//   }
//   // 栈是不是空的 return false
//   // 空的 return true
//   return !stack.length
//   // if(stack.length){
//   //   return false
//   // }else{
//   //   return true
//   // }
  

// };
// // @lc code=end

/**
 * @param {string} s
 * @return {boolean}
 */
//stack 栈结构 存入右括号 
var isValid = function(s) {
  const mappings = new Map();
  mappings.set("(",")");
  mappings.set("[","]");
  mappings.set("{","}");

  let stack = [];
  for(let i = 0;i<s.length;i++){
    if(mappings.has(s[i])){
      stack.push(mappings.get(s[i]));
    }else{
      if(stack.pop()!==s[i]){
        return false;
      }
    }
  }
  if(stack.length!=0){
    return false;
  }
  return true;

};
