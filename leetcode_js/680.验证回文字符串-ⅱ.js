/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    //避免代码重复
    function isPalindrome(left,right){
        while(left<right){
            if(s[left] !== s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let left = 0 ,right = s.length-1;
    while(left<right){
        if(s[left] !== s[right]){
            const result = isPalindrome(left+1,right) || isPalindrome(left,right-1);
            return result;
        }else{
            left++;
            right--;
        }
    }
    return true;
};
// @lc code=end

