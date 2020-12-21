/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//总油量大于等于消耗量，肯定有解；小于的直接返回无解
//若某个点无法到达下一个点，则直接从这个失败的点出发
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let currentGas = 0;
    let start = 0;
    for(let i=0;i<gas.length;i++){
        totalGas +=gas[i];
    }
    for(let i=0;i<cost.length;i++){
        totalCost +=cost[i];
    }

    if(totalGas<totalCost){
        return -1;
    }

    for(let i=0;i<gas.length;i++){
        currentGas = currentGas - cost[i] + gas[i];
        if(currentGas < 0){
            currentGas = 0;
            start = i+1;
        }
    }

    return start;

};
// @lc code=end

