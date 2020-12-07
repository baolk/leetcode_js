/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//动态规划
//需要两个表格 一个从左边到某个数的乘积；一个从右边到某个数的乘积；
//进阶：用两个变量代替两个数组，减少空间复杂度
var productExceptSelf = function(nums) {
    const result = Array(nums.length).fill(1);  //初始化为1

    let product = 1;
    for(let i = 0;i<nums.length;i++){
        result[i] = result[i] * product;
        product = product * nums[i];
    }

    product = 1;
    for(let i = nums.length-1;i>=0;i--){
        result[i] = result[i] * product;
        product = product * nums[i];
    }

    return result;

};
// @lc code=end

