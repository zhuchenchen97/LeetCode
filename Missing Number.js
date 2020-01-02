/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //method2 sum
//     var len = nums.length;
//     var sum = (0+len)*(len+1)/2;
//     var out = sum;
//     for(var i of nums){
//         out = out-i;
//     }
//     return out;
    
    //method1 xor
    var len = nums.length;
    var out = len;
    for(var i in nums){
        out ^= i;
        out ^= nums[i];
    }
    return out;
};