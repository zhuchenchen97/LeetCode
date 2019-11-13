class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m-1;
        int j = n-1;
//        for(int k=m+n-1; k>=0; k--){
//            if(j<0){
//               break;
//            }
//            if(i<0){
//                for(int a=0;a<=j;a++){
//                    nums1[a]=nums2[a];
//                }
//                break;
//            }
//             if(nums1[i]<=nums2[j]){
//                 nums1[k]=nums2[j];
//                 j--;
//             }else{
//                 nums1[k]=nums1[i];
//                 i--;
//             }

//        }  
        while(i>=0 && j>=0){
          if (nums1[i] > nums2[j]) {
            nums1[i + j + 1] = nums1[i];
            i--;
          } else {
            nums1[i + j + 1] = nums2[j];
            j--;
          }
        }
        while(j>=0){
            nums1[i + j + 1] = nums2[j];
            j--;
        }
    }
}