class Solution {
    public int maxSubArray(int[] nums) {
        int curmax = 0;
        int max = Integer.MIN_VALUE;
        for(int i=0;i<nums.length;i++){
            curmax = Math.max(curmax+nums[i],nums[i]);
            max = Math.max(max,curmax);
        }
        return max;
    }
}