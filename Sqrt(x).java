class Solution {
    public int mySqrt(int x) {
       int low=1,high=x/2+1;   //对于一个非负数n，它的平方根不会小于大于（n/2+1）
       int mid=1;
       while(low<=high){
          mid  = low+(high-low)/2;
        if(mid==x/mid){
            return mid;
        }else if(mid<x/mid){
            low=mid+1;
        }else{
            high = mid-1;
        }
       }
       return high;
}
}
//用除法防止溢出 