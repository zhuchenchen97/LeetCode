/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var visited = {};
    for(var i=0;i<nums.length;i++){
        if(visited[nums[i]])
            return true;
        else
            visited[nums[i]]=true;
    }
    return false;
};