/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head)
        return null;
    while(head&&head.val==val){
        head = head.next;
    }  
    var pre = head;
    while(pre&&pre.next){
        if(pre.next.val==val){
            pre.next = pre.next.next;
        }
        else
            pre = pre.next;
    }
    return head;
};