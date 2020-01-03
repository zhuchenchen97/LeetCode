/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.result = [];
    this.result[0] = nums[0];
    //method3 dp
    for(var i=1; i<nums.length; i++){
        this.result[i] = this.result[i-1]+nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    // method1 brute force(time limit exceeded)
    // var num = this.nums;
    // num = num.slice(i,j+1);
    // var sum = 0;
    // for(var i of num)
    //     sum+=i;
    // return sum;
    
    //method2 cache
    // if(this.result[i+"+"+j]!=undefined){
    //     return this.result[i+"+"+j];
    // }
    // var num = this.nums;
    // num = num.slice(i,j+1);
    // var sum = 0;
    // for(var i of num)
    //     sum+=i;
    // this.result[i+"+"+j]=sum;
    // return sum;
    
    return i==0?this.result[j]:this.result[j]-this.result[i-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */