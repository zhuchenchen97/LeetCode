/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //method1
    var a = [];
    while(head){
        a.push(head.val);
        head=head.next;
    }
    for(var i =0; i<a.length/2; i++){
        if(a[i]!=a[a.length-i-1])
            return false;
    }
    return true;
    
    //method2: reverse the last half list
    // var s = head;
    // var f = head;
    // while(f&&f.next){
    //     s=s.next;
    //     f=f.next.next
    // }
    // if(f!=null){  //odd nodes: let right half smaller
    //     s=s.next;
    // } 
    // s = reverse(s);
    // f=head;
    // while(s!=null){
    //     if(f.val!=s.val)
    //         return false;
    //     f=f.next;
    //     s=s.next;
    // }
    // return true;
};

// var reverse = function(s){   //reverse linked list
//     var pre = null;
//     var cur = s;    
//     while(cur!=null){
//       var next = cur.next;
//       cur.next = pre;
//       pre = cur;
//       cur = next;
//     }
//     return pre;
// }