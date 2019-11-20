class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> out = new ArrayList<>();
        List<Integer> pre = new ArrayList<>();
       // out.add(pre);
        for(int i =0;i<numRows; i++){
            List<Integer> in = new ArrayList<>();
            for(int j = 0; j<=i; j++){
                if(j==0||j==i)
                  in.add(1);
                else{
                    //in.add(out.get(i - 1).get(j-1)+out.get(i - 1).get(j));
                    in.add(pre.get(j-1)+pre.get(j));
                }
            }
            pre = in;
            out.add(in);
        }
        return out;
    }
}