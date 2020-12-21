/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
//需要三个指针
var reverseList = function(head){
  //写法1:传统的写法
  let prev = null;
  let curr = head;
  let next = head;

  while(curr !== null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;

  //写法2:解构赋值，可以直接交换，不需要临时变量
  // let prev = null;
  // let curr = head;
  // while(curr !== null){
  //   [curr.next,prev,curr] = [prev,curr,curr.next];
  // }
  // return prev;
};
// @lc code=end

