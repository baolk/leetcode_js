/*
 * [2] 两数相加
 两个非空链表储存两个非负整数，各自的位数逆序储存，且每个节点只能储存一个数字
 将这两个数字相相加后，返回一个新的链表，也是逆序存储的
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 2-->4-->3
// 5-->6-->4
// 将以上链表相加，设置一个专门的变量carry存储进位

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    while(l1 !== null || l2 !== null){
        let sum = 0;
        if(l1!==null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum +=carry;
        current.next = new ListNode(sum % 10);
        carry = Math.floor(sum/10);
        current = current.next;
    }
    if(carry >0){
        current.next = new ListNode(carry);
    }
    return dummy.next;
};
