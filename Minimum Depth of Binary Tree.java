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
    public int minDepth(TreeNode root) {
        // if(root==null){
        //     return 0;
        // }
        // if(root.left==null && root.right==null){
        //     return 1;
        // }
        // if(root.left==null){
        //     return 1+minDepth(root.right);
        // }
        // if(root.right==null){
        //     return 1+minDepth(root.left);
        // }
        // return 1+Math.min(minDepth(root.left),minDepth(root.right));
        
        //using iteration:
        if(root==null)
            return 0;
        int level = 1;
        int curNum=1;
        int nextNum=0;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while(!queue.isEmpty()){
            TreeNode node = queue.poll();
            curNum--;
            if(node.left!=null){
                queue.add(node.left);
                nextNum++;
            }
            if(node.right!=null){
                queue.add(node.right);
                nextNum++;
            }
            if(node.left==null && node.right==null){
                return level;
            }
            if(curNum==0){
                curNum=nextNum;
                nextNum=0;
                level++;
            }
        }
        return level;
    }
}