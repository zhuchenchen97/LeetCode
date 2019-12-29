/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var visited = {};
    for(var i=0;i<nums.length;i++){
        if(!visited.hasOwnProperty(nums[i])){
            visited[nums[i]]=i;
        }else{
            if(i-visited[nums[i]]<=k)
                return true;
            else
                visited[nums[i]]=i;
        }
    }
    return false;
};