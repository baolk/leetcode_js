/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//
var getIntersectionNode = function(headA, headB) {
    let n1 = headA;
    let n2 = headB;

    while(n1!==n2){
        if(n1 === null){
            n1 = headB;
        }else{
            n1 = n1.next;
        }
        if(n2 === null){
            n2 = headA;
        }else{
            n2 = n2.next;
        }
    }

    return n1;   //不相等时直接返回null
};
// @lc code=end

