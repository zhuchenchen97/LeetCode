class Solution {
    public int romanToInt(String s) {
       int result;
       if(s==null || s.length()==0){
           return 0;
       }
    
        HashMap<Character,Integer> roman = new HashMap<>();
        roman.put('I',1);
        roman.put('V',5);
        roman.put('X',10);
        roman.put('L',50);
        roman.put('C',100);
        roman.put('D',500);
        roman.put('M',1000);
        
        int len = s.length();
        result = roman.get(s.charAt(len-1));
        for(int i=len-2; i>=0; i--){
            if(roman.get(s.charAt(i))>=roman.get(s.charAt(i+1))){
              result=result+roman.get(s.charAt(i));
            }
            else{
                result=result-roman.get(s.charAt(i));
            }
        }
        return result;
    }
}