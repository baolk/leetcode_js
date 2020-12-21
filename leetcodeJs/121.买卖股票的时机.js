/*
 * [121] 买卖股票的时机
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
//遍历数组查询左半区域的最低点，然后获得最大利润
var maxProfit = function(prices) {
    if(prices.length === 0){
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i=0;i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i];
        }
        
        if(prices[i]-minPrice>maxProfit){
            maxProfit = prices[i] -minPrice;
        }
    }

    return  maxProfit;
};

