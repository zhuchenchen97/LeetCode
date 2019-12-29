/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //method1 iteration
    var m =[];
    m[0] = nums[0];
    m[1] = Math.max(nums[0],nums[1]);
    if (nums.length==0)
        return 0;
    if(nums.length==1)
        return nums[0];
    if(nums.length==2)
        return Math.max(nums[0],nums[1]);
    for(var i=2; i<nums.length; i++){
        m[i] =  Math.max(m[i-2]+nums[i], m[i-1]);
    }
    return m[nums.length-1];
    
    //method2 recursion+memoization
//     var m =[];
//     for(var i=0;i<nums.length;i++)
//         m[i]=-1;
    
//     if(nums.length==0)
//         return 0;
//     else if(nums.length==1)
//         return nums[0];
//     else if(nums.length==2)
//         return Math.max(nums[0],nums[1]);
//     else if(m[nums.length-1]!=-1)
//         return m[nums.length-1];
//     else{
//         m[nums.length-1] = Math.max(nums[nums.length-1]+rob(nums.slice(0,nums.length-2)),rob(nums.slice(0,nums.length-1)));
//         return m[nums.length-1];
//     }
        
    
 };