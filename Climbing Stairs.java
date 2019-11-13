class Solution {
    public int climbStairs(int n) {
        if(n<=2){
            return n;
        }
       // int[] m = new int[n];
       //  m[0]=1;
       //  m[1]=2;
       //  for(int i=2;i<n;i++){
       //      m[i]=m[i-1]+m[i-2];
       //  }
       //  return m[n-1];
        int n1=1;
        int n2=2;
        int temp;
        for(int i=3; i<=n;i++){
            temp=n2;
            n2=n1+n2;
            n1=temp;
        }
        return n2;
    }
}
//DP