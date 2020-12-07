/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//与第二题不同的是，第二题链表是从低到高
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];

    let carry = 0;//进位
    let curr = null;
    while(l1 !==null){
        stack1.push(l1.val);
        l1 = l1.next;
    }  
    while(l2 !==null){
        stack2.push(l2.val);
        l2 = l2.next;
    } 

    while(stack1.length !== 0 ||stack2.length !== 0){
        let sum = 0;
        if(stack1.length !== 0){
            sum +=stack1.pop();
        }
        if(stack2.length !== 0){
            sum +=stack2.pop();
        }
        sum += carry;

        const node = new ListNode(sum % 10);
        carry = Math.floor(sum /10);
        node.next = curr;
        curr = node;
    }

    if(carry !== 0){
        const node = new ListNode(carry);
        node.next = curr;
        curr = node;
    }

    return curr;
};
// @lc code=end

