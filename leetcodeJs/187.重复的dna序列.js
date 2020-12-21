/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
//滑动窗口
//用map储存
var findRepeatedDnaSequences = function(s) {
    const map = new Map();
    let result = [];
    let i =0;
    while(i+10<=s.length){
        const dna = s.substring(i,i+10);
        if(!map.has(dna)){
            map.set(dna,1);
        }else if(map.get(dna) === 1){
            map.set(dna,2);
            result.push(dna);
        }else{
            map.set(dna,map.get(dna)+1);
        }
        i++;
    }
    return result;
};
// @lc code=end

