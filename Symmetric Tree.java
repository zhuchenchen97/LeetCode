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
    //recursion:
    public boolean isSymmetric(TreeNode root) {
        if(root==null){
            return true;
        }
        else{
            return isMirror(root.left,root.right);
        }
    }
    
    public boolean isMirror(TreeNode left, TreeNode right){
        if(left==null &&right==null){
            return true;
        }else if(left==null||right==null){
            return false;
        }else if(left.val!=right.val){
            return false;
        }
        return isMirror(left.left,right.right)&&isMirror(left.right,right.left);
    }
    //iteration:
//     public boolean isSymmetric(TreeNode root){
//         if(root==null){
//             return true;
//         }
//         Stack<TreeNode> s = new Stack<>();
//             s.push(root.left);
//             s.push(root.right);
//         while(!s.isEmpty()){
//             TreeNode r1 = s.pop();
//             TreeNode r2 = s.pop();
//             if(r1==null&&r2==null){
//                 continue;
//             }else if(r1==null||r2==null||r1.val!=r2.val){
//                 return false;
//             }
//             s.push(r1.left);
//             s.push(r2.right);
//             s.push(r1.right);
//             s.push(r2.left);
//         }
//         if(!s.isEmpty()){
//             return false;
//         }
//         return true;
        
//     }
}