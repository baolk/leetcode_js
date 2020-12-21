/*
 * [5] 最长回文子串
 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

/**
 * @param {string} s
 * @return {string}
 */
//以某个字符为中心，向两边扩散寻找是否是回文，取最大值返回
var longestPalindrome = function(s) {
    let start  = 0;
    let maxLength = 1;
    if(s.length < 2){
        return s;
    }

    function expandAroundCenter(left,right){
        while(left>=0&&right<s.length&&s[left]===s[right]){
            if(right-left+1>maxLength){
                maxLength = right-left+1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for(let i = 0;i<s.length;i++){
        expandAroundCenter(i-1,i+1);
        expandAroundCenter(i,i+1);
    }

    return s.substring(start,start+maxLength);

};

