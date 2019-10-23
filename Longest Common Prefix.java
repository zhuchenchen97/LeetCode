class Solution {
    public String longestCommonPrefix(String[] strs) {
        int len = strs.length;
        if(strs==null || len==0){
            return "";
        }
        String lcp = strs[0];
        for(int i=0; i<len; i++){
            String currentString = strs[i];
            int j = 0;
            while(j<lcp.length()&&j<currentString.length()&&lcp.charAt(j)==currentString.charAt(j)){
                j++;
            }
            if(j==0){
                return "";
            }else{
                lcp=lcp.substring(0,j); 
            }
        }
        return lcp;

    }
}