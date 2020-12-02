/*
 * [53] 最大子序和
 给定一个整数数组 nums
 找到一个具有最大和的连续子数组（子数组最少包含一个元素）
 返回其最大和。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//遍历某个元素，判断是否沿用以前的数组，还是新开一个数组
var maxSubArray = function(nums) {
    let memo = [];
    memo[0] = nums[0];
    let max = nums[0];
    for(let i=i;i<nums.length;i++){
        memo[i] = Math.max(nums[i]+memo[i-1],nums[i]);
        max = Math.max(max,memo[i]);
    }
    return max;
};

