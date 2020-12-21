/*
 * [19] 删除链表的倒数第N个节点
 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//1.定义两个指针
//2.两个指针间隔n个为止
//3.终止条件是第二个指针到达最后一个节点
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let n1,n2 = dummy;
    for(let i = 0;i<=n;i++){
        n2 = n2.next;
    }
    while(n2 !==null){
        n1 = n1.next;
        n2 = n2.next;
    }
    n1.next = n1.next.next;
    return dummy.next;
};

