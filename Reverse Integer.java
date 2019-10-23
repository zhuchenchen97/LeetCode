class Solution {
    public int reverse(int x) {
        int reversed = 0;
        int reminder = 0;
     //   double MAX = Math.pow(2,31)-1;
     //   double MIN = Math.pow(2,31)*(-1);
        while(x!=0){
            reminder = x%10;
            int pre = reversed;
            reversed  = reversed*10 + reminder;
            if(pre!=reversed/10){
                return 0;
            }
            x = x/10;
        }           
        
        return reversed;

    }
}