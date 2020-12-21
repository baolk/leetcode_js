/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//滑动窗口
var minWindow = function(s, t) {
    let minLen = Infinity;
    let start;
    let map = {};
    let missingType = 0 //当前缺失的字符种类数
};
// @lc code=end

