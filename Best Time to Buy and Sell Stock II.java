class Solution {
    public int maxProfit(int[] prices) {
        if(prices==null || prices.length==0)
            return 0;
        int max = 0;
        int minnum = prices[0];
        int all = 0;
        for(int i=1; i<prices.length; i++){
            if(prices[i]<prices[i-1]){
                all = all+ prices[i-1]-minnum;
                minnum = prices[i];
            }else{
                if(i==prices.length-1)
                    all =all+prices[i]-minnum;
            }
        }
        return all;
    }
}