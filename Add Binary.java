class Solution {
    public String addBinary(String a, String b) {
        int carry = 0;
        int i = a.length()-1;
        int j = b.length()-1;
        StringBuilder sb = new StringBuilder();
        while(i>=0 || j>=0){
            if(i>=0){
                carry = carry + a.charAt(i)-'0';
            }
            if(j>=0){
                carry = carry + b.charAt(j)-'0';
            }
            if(carry==3){
                sb.append(1);
                carry = 1;
            }else if(carry==2){
                sb.append(0);
                carry =1;
            }else if(carry==1){
                sb.append(1);
                carry=0;
            }else if(carry==0){
                sb.append(0);
                carry=0;
            }
            i--;
            j--;
        }
        if(carry==1)
           sb.append(carry);
        return sb.reverse().toString();
    }
}