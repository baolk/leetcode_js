/*
 * [49] 给定一个字符串数组，将字母异位词组合在一起。
 字母异位词指字母相同，但排列不同的字符串
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//创建一个长度为26的数组，遍历所有字符串，出现的字母置为1
//将相同的数组放在一起，进行分组
var groupAnagrams = function(strs) {
    const map = new Map();
    if(strs.length === 0){
        return [];
    }
    for(let str of strs){
       const characters = Array(26).fill(0);
       for(let i=0;i<str.length;i++){
           const ascii = str.charCodeAt(i) - 97;
           characters[ascii]++;
       }
       const key = characters.join(" "); //避免["bdddddddddd", "bbbbbbbbbbc"]这样测试用例的干扰
       if(map.has(key)){
           map.get(key).push(str);
       }else{
           map.set(key,[str])
       }
    }

    const result = [];
    for(let arr of map){
        result.push(arr[1]);
    }

    return result;
};
