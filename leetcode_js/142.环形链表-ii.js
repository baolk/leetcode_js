/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
//快慢指针
//使用环形链表1判断是否有环
//使用弗洛伊德算法确定哪个环
var detectCycle = function(head) {
  if(head === null)return null;

  let slow = head;
  let fast = head;
  let isCycle = false;
  while(fast.next !== null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      isCycle = true;
      break;
    }
  }

  if(!isCycle){
    return null;
  }else{
    fast = head;
    while(slow !== fast){
      slow =  slow.next;
      fast =  fast.next;
    }
    return fast;
  }
};


// @lc code=end

