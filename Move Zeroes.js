/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // for(var i=0;i<nums.length;i++){
    //     var change = false;
    //     if(nums[i]==0){
    //         if(i==nums.length-1)
    //             break;            
    //         for(var j=i+1; j<nums.length; j++){
    //             if(nums[j]!=0){
    //                 var tmp = nums[i];
    //                 nums[i] = nums[j];
    //                 nums[j] =tmp;
    //                 change = true;
    //                 break;
    //             }
    //         }
    //         if (!change)
    //             break;
    //     }
    // }
    //method2
    // Shift non-zero values as far forward as possible
    // Fill remaining space with zeros
    var j=0;
    for(var i in nums){
        if(nums[i]!=0){
            nums[j]=nums[i];
            j++;
        }
    }
    while(j<nums.length)
        nums[j++] = 0;
};