/*
 * [70] 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
 */

/**
 * @param {number} n
 * @return {number}
 */
//动态规划 
//需要一个记忆数组
//memo[i-2]  3种方法
//memo[i-1]  5种方法
//memo[i]=memo[i-2]+memo[i-1] 8种方法
var climbStairs = function(n) {
    const memo = [];
    memo[1] = 1 ;  //到第一个台阶 1种方法
    memo[2] = 2 ;  //到第一个台阶 2种方法

    for(let i =3;i<=n;i++){
        memo[i] = memo[i-2]+memo[i-1];
    }

    return memo[n];
};
