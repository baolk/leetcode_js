/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//使用双指针 odd和even指针
var oddEvenList = function(head) {
    if(head === null) return null;
    if(head.next === null) return head;

    let odd = head;
    let even = head.next;
    let evenHead =head.next;  //站位

    while(even !== null && even.next !==null){
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }
    odd.next = evenHead;

    return head;
};
// @lc code=end

