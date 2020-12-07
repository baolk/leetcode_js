/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
//定义两个变量 从后往前遍历
var backspaceCompare = function(S, T) {
    let i = S.length-1;
    let j = T.length-1;
    let backspaceS = 0;
    let backspaceT = 0;

    while(i>=0||j>=0){
        while(i>=0){
            if(S[i] === "#"){
                backspaceS++;
                i--;
            }else if(backspaceS>0){
                backspaceS--;
                i--;
            }else{
                break;
            }
        }

        while(j>=0){
            if(T[j] === "#"){
                backspaceT++;
                j--;
            }else if(backspaceT>0){
                backspaceT--;
                j--;
            }else{
                break;
            }
        }

        if(S[i]!==T[j]){
            return false;
        }
        i--;
        j--;
    }

    return true;

};
// @lc code=end

