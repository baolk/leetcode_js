/*
 * [62] 不同路径
 机器人每次只能向下或者向右移动一步
 机器人试图达到网格的右下角
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//经典的动态规划
var uniquePaths = function(m, n) {
    const memo = [];
    for(let i=0;i<n;i++){
        memo.push([]);
    }
    for(let row=0;row<n;row++){
        memo[row][0] = 1;
    }
    for(let col=0;col<m;col++){
        memo[0][col] = 1;
    }

    for(let row=1;row<n;row++){
        for(let col=1;col<m;col++){
            memo[row][col] = memo[row-1][col] + memo[row][col-1];
        }
    }
    return memo[n-1][m-1];
};
