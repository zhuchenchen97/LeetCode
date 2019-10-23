class Solution {
    public int lengthOfLastWord(String s) {
       
        int curlen=0;
        s=s.trim();
        // if(s==""){
        //     return 0;
        // }
        int slen = s.length();
        for(int i=0; i<slen; i++){
            if(s.charAt(i)==' '){
                curlen = 0;
            }else{
                curlen++;
            }
        }
        return curlen;
    }
}