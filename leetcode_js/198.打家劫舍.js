/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    let prev2 = nums[0];
    let prev1 = Math.max(nums[0],nums[1]);
    for(let i =2;i<nums.length;i++){
       let temp = Math.max(nums[i]+prev2,prev1);
       prev2 = prev1;
       prev1 = temp;
    }
    return prev1;
};
// @lc code=end

