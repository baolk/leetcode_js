/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//异或运算符的妙用
//n ^ n === 0
//n ^ 0 === n
//异或满足交换律和结合律
var singleNumber = function(nums) {
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        res = res ^ nums[i];
    }

    return res;

};
// @lc code=end

