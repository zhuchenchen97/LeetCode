class Solution {
    public boolean isValid(String s) {
        if(s==null || s=="" || s.length()==1){
            return false;
        }
        Stack<Character> stack = new Stack<>();
        for(char c : s.toCharArray()){
            if (c=='(' || c=='[' || c=='{')
                stack.push(c);
            else if(c==')' || c==']' || c=='}')
                if(stack.isEmpty() || !isPair(stack.pop(),c)){
                    return false;
                }
        }
        if(stack.isEmpty())
            return true;
        else
            return false;
    }
    
    public boolean isPair(char a,char b){   //help function
        if(a=='['&&b==']' || a=='('&&b==')' || a=='{'&&b=='}'){
            return true;
        }else{
            return false;
        }
    }
}