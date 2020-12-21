/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Anagram  异位词
//Palindrome  回文
//创建一个map,第一个字符串出现一个字母+1,第二个字符串中出现一个字母-1，最后判断每个字母是否为0
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const map = new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }else{
            map.set(s[i],1);
        }

        if(map.has(t[i])){
            map.set(t[i],map.get(t[i])-1);
        }else{
            map.set(t[i],-1);
        }
    }

    for(let letter of map){
        if(letter[1]!==0)return false;
    }

    return true;
};
// @lc code=end

