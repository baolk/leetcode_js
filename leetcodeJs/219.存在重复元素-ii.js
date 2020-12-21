/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let newMap = new Map();
    
    for(let i = 0;i<nums.length;i++){
        if(!newMap.has(nums[i])){
            newMap.set(nums[i],i);
        }else{
            if(i-newMap.get(nums[i])<=k){
                return true;
            }else{
                newMap.set(nums[i],i);
            }
        }
    }
    return false;
};
// @lc code=end

