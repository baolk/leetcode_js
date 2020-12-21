/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
//双指针移动
var sortArrayByParity = function(A) {
    let i = 0,j = A.length-1;
    while(i<j){
        if(A[i]%2 === 1 && A[j]%2 ===0){
            [A[i],A[j]] = [A[j],A[i]];
            i++;
            j--;
        }else if(A[i]%2 === 0 && A[j]%2 ===0){
            i++;
        }else if(A[i]%2 === 0 && A[j]%2 ===1){
            i++;
            j--;
        }else{
            j--;
        }
    }
    return A;
};
// @lc code=end

