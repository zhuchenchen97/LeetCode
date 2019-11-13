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
    public boolean isBalanced(TreeNode root) {
      if(root==null){
          return true;
      }
      if (Math.abs(dep(root.left)-dep(root.right))>1){
          return false;
      }
      return isBalanced(root.left)&&isBalanced(root.right);
    }
              
    public int dep(TreeNode root){
        if(root==null){
            return 0;
        }
        int leftdep = dep(root.left);
        int rightdep = dep(root.right);
        return 1+Math.max(leftdep,rightdep);
    }
}