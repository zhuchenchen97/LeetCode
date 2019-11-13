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
    //recursion
    // public int maxDepth(TreeNode root) {
    //     //recursion
    //     int i=0;
    //     if(root==null){
    //         return 0;
    //     }else if(root.left==null && root.right==null){
    //         return 1;
    //     }
    //     return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
    // }
    
    //iteration dfs
    public int maxDepth(TreeNode root){
        if(root==null){
            return 0;
        }
        Stack<TreeNode> s = new Stack<>();
        Stack<Integer> s2 = new Stack<>();
        s.push(root);
        s2.push(1);
        int maxDepth=0;
        while(!s.isEmpty()){
            TreeNode n1 = s.pop();
            int num = s2.pop();
            maxDepth = Math.max(num,maxDepth);
            if(n1.left!=null){
                s.push(n1.left);
                s2.push(num+1);
            }
            if(n1.right!=null){
                s.push(n1.right);
                s2.push(num+1);
            }
        }
        return maxDepth;
        
    }
}