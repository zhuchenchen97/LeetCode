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
    public boolean hasPathSum(TreeNode root, int sum) {
        //recursion
        if(root==null)
            return false;
        if(root.left==null && root.right==null && root.val==sum)
            return true;
        return (hasPathSum(root.left, sum-root.val)||hasPathSum(root.right, sum-root.val));
        
        //iteration
//         if(root==null)
//             return false;
            
//         Stack<TreeNode> stack  = new Stack<>();

//         while(!stack.isEmpty()  || root != null){
//             while(root!=null){
//                 sum = sum - root.val;
//                 stack.push(root);
//                 root=root.left;
//             }
            
// 		   if (sum == 0 && stack.peek().right == null && stack.peek().left == null) {
// 			return true;
// 		   } 
            
            
//             while(!stack.isEmpty() && stack.peek().right == root){
//                root = stack.pop();
//                 sum = sum+root.val;
//             }
            
//             root = stack.isEmpty() ? null : stack.peek().right;
//         }
//         return false;
   }
}