class Solution {
    public String countAndSay(int n) {
        if(n<=0){
            return "";
        }
        String pre="1";
        for(int i=1;i<n;i++){
            StringBuffer cur=new StringBuffer();
            int count =1;
            for(int j=1;j<pre.length();j++){
                if(pre.charAt(j)==pre.charAt(j-1)){
                   count++;
                }else{
                    cur.append(count);
                    cur.append(pre.charAt(j-1));
                    count=1;
                }
            }
            cur.append(count);
            cur.append(pre.charAt(pre.length()-1));
            pre=cur.toString();
        }
        return pre;
    }
}