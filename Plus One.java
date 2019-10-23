import java.math.BigInteger;

class Solution {
		public int[] plusOne(int[] digits) {

		if(digits==null || digits.length==0){
			return null;
		}
		StringBuffer sb = new StringBuffer();
		for(int d : digits){
			sb.append(d);
		}
		BigInteger outcome = new BigInteger(sb.toString());
		outcome=outcome.add(new BigInteger("1"));
		String s = outcome.toString();
		int[] intArray = new int[s.length()];
		for(int j=0; j<s.length(); j++){
		Character c = s.charAt(j);
		intArray[j]=Integer.parseInt(c+"");
		}
		return intArray;
		}

}