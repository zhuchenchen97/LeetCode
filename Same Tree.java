/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
       //recursion
       // if(p==null &&q==null){
       //     return true;
       // }
       // if(p==null ||p==null){
       //     return false;
       // }
       //  if(p.val!=q.val){
       //      return false;
       //  }
       //  else{
       //      return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);
       //  }
        
       //iteration 遍历树，对每次的节点做判断
        if(p==null &&q==null){
            return true;
        }
        if(p==null||q==null){
            return false;
        }
        Stack<TreeNode> stackP = new Stack<TreeNode>();
        Stack<TreeNode> stackQ = new Stack<TreeNode>();
        stackP.push(p);
        stackQ.push(q);
        while(!stackP.isEmpty()&&!stackQ.isEmpty()){
            TreeNode p1 = stackP.pop();
            TreeNode q1 = stackQ.pop();
            if(p1.val!=q1.val){
                return false;
            }
            if(p1.left!=null&&q1.left!=null){
                 stackP.push(p1.left);
                 stackQ.push(q1.left);
            }else if(p1.left==null &&q1.left==null){
                
            }else{
                return false;
            }
            
            if(p1.right!=null&&q1.right!=null){
                 stackP.push(p1.right);
                 stackQ.push(q1.right);
            }else if(p1.right==null &&q1.right==null){
                
            }else{
                return false;
            }
        }
        
        if(stackP.isEmpty()&&stackQ.isEmpty()){
            return true;
        }else{
            return false;
        }
    }
      

    
}