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
    // var visited={};
    // var h1 = head;
    // while(h1){
    //   var num = h1.val;  
    //   if(!visited.hasOwnProperty(num)){
    //       visited[num]=1;
    //   }
    //   else{
    //       visited[num]++;
    //   }    
    //   h1=h1.next;
    // }
    // var h2 = head;
    // var pre = null;
    // while(h2.next){
    //     var nex = h2.next;
    //     pre = h2;
    //     var num2 = nex.val;
    //     if(visited[num2]>1){
    //         h2.nex = nex.next;
    //     }
    //     else{
    //         h2=h2.next;
    //     }
    // }
    // if(visited[pre.val]>1){
    //     pre.next=null;
    // }
    // while(visited[head.val]>1){
    //     head=head.next;
    // }
    // return head;
    
    var dummy = { val: null, next: head };
    var cur=head;
    var prev = cur;
    var isDu = false;
    var headIsDu = false;
    if(!head)
        return head;
    while(cur!=null){
     if(cur.next==null){
         if(isDu)
             prev.next = cur.next; 
         if(headIsDu){
          return head.next;
         }
        return head;
     }
    else{
        if(cur.next.val==cur.val){
            if(cur==head)
                headIsDu=true;
            cur.next=cur.next.next;
            isDu = true;
         }
        else{
            if(isDu){
                  prev.next = cur.next; 
                  cur = prev.next;                       
 
            }
            //prev=cur;
            else{
             prev = cur;
             cur = cur.next;                
            }

            isDu = false;
        }
     }

    }
      // if(headisDu){
      //     dummy.next = head.next;
      // }

    
    
};