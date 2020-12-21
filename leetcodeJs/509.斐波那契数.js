/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */

//动态规划：recursion + memoization (递归+记忆化)
var fib = function(N) {
    if(N <=1) return N;

    const memo = [];
    memo[0] = 0;
    memo[1] = 1;

    function memoize(number){
      if(memo[number] !== undefined){
        return memo[number];
      }else{
        memo[number] = memoize(number-1) + memoize(number -2);
        return memo[number];
      }
    }

    const result = memoize(N);
    return result;
};
// @lc code=end

