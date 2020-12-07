/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//使用两个指针，第一个指针依次遍历，遇到0的数就跳过，遇到非0就和第二个指针的位置交换顺序；
//先把非0的数放前面，其他的数填0 
var moveZeroes = function(nums) {
    let j = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[j] = nums[i];
            j++;
        }
    }

    for(i=j;i<nums.length;i++){
        nums[i] = 0;
    }

    return nums;
};
// @lc code=end

