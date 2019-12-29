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
var reverseList = function(head) {
    //iteration
    // var newHead = null;
    // while(head!=null){
    //     var next = head.next;
    //     head.next = newHead;
    //     newHead = head;
    //     head = next;
    // }
    // return newHead;
    
    
    //recursion
    if(head==null||head.next==null)
        return head;
    var n = reverseList(head.next);
    head.next.next=head;
    head.next=null;
    return n;
};