/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
//在A字符串里再添加一个A
var rotateString = function(A, B) {
    if(A.length !== B.length){
        return false;
    }

    const str = A + A;
    return str.includes(B);
};
// @lc code=end

