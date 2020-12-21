/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.item = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.item.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.item.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.item[this.item.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.item);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

