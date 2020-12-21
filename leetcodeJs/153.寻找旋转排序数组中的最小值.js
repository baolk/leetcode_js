/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//只有在旋转点会出现 数据减小的情况
var findMin = function(nums) {
    if(nums.length === 1)return nums[0];
        for(let i=0;i<nums.length;i++){
            if(nums[i]>nums[i+1]){
                return nums[i+1];
            }
        }
        return nums[0];
};
// @lc code=end

