/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //below is not in-place modification because slice and concat will create new array
    // var len = nums.length;
    // var part1 = nums.slice(len-k,len);
    // var part2 = nums.slice(0,len-k);
    // nums=part1.concat(part2);
    
    
    var len = nums.length;
    k = k % len;
    var part1 = nums.splice(len-k,k);
    for(var i=k-1; i>=0; i--){
        nums.unshift(part1[i])
    }
};