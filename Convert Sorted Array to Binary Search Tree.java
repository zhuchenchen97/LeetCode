/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {   //二分查找思想
    public TreeNode sortedArrayToBST(int[] nums) {
        return helper(nums,0,nums.length-1);
    }
    
    public TreeNode helper(int[] nums, int num1, int num2){
        if(num1>num2){
            return null;
        }
        if(num1==num2){
            return new TreeNode(nums[num1]);
        }

        int mid = (num1+num2)/2;
        TreeNode n = new TreeNode(nums[mid]);
        n.left = helper(nums,num1,mid-1);
        n.right = helper(nums,mid+1,num2);
        return n;
    }
}