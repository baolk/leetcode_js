/*
 * [83] 删除排序链表中的重复元素
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次
 */

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


var deleteDuplicates = function(head) {
    let curr = head;
    while(curr !== null && curr.next !== null){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return head;
};
