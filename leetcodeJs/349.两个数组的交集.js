/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result = new Set();
    const set = new Set(nums2);  //将数组转换成set

    for(num of nums1){
        //数组搜索，复杂度O(n)
        //Set Map的has方法 复杂度O(1)
        if(set.has(num)){
            result.add(num);
        }
    }

    return Array.from(result);
};
// @lc code=end

