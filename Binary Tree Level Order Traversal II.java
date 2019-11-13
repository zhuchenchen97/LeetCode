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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        int curNum=1;
        int nextNum=0;
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> layerList = new ArrayList<>(); 
        Queue<TreeNode> queue = new LinkedList<>();
        
        if(root==null){
            return result;
        }
        queue.offer(root);
        while(!queue.isEmpty()){
            TreeNode node = queue.poll();
            layerList.add(node.val);
            curNum--;
            if(node.left!=null){
                queue.add(node.left);
                nextNum++;
            }
            if(node.right!=null){
                queue.add(node.right);
                nextNum++;
            }
            if(curNum==0){
                result.add(0,layerList);
                layerList = new ArrayList<>();
                curNum=nextNum;
                nextNum=0;
            }
        }
        return result;
    }
}