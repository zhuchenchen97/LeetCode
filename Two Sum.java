class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        HashMap<Integer,Integer> visited = new HashMap<Integer,Integer>();
        if(nums==null || nums.length==0){
            return result;
        }
        for(int i=0; i<nums.length; i++){
            if(visited.containsKey(target-nums[i])){
                result[0] = i;
                result[1] = visited.get(target-nums[i]);
                return result;
            }
            visited.put(nums[i],i);
        }
        return result;
    }
}