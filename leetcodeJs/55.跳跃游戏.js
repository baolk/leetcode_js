/*
 * [55] 跳跃游戏
给定一个非负整数数组，你最初位于数组的第一个位置
数组中的每个元素代表你在该位置可以跳跃的最大长度
判断你是否能够到达最后一个位置。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 //动态规划
 //用一个数组储存
var canJump = function(nums) {
    const totalLength = nums.length;
    const memo = Array(totalLength).fill(0);
    memo[totalLength - 1] =1;

    function jump(position){
        if(memo[position] === 1){
            return true;
        }
        if(memo[position] === -1){
            return false;
        }

        const maxJump = Math.min(position+nums[position],totalLength -1);
        for(let i=position+1;i<maxJump;i++){
            const jumpResult = jump[i];
            if(jumpResult === true){
                memo[position] === 1;
                return true;
            }
        }
        memo[position] = -1;
        return false;
    }
    let result = jump[0];
    return result;
};

//贪心算法
//用一个变量 maxJump
var canJump = function(nums) {
    let maxJump = nums.length - 1;
    for(let i =nums.length-2;i>=0;i++){
        if(i+nums[i]>=maxJump){
            maxJump = i;
        }
    }
    return maxJump === 0; 
};
