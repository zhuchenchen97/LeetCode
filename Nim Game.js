/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
   //wrong answer: JS heap out of memory
    // if(n==1||n==2||n==3)
    //     return true;
    // var result =[];
    // result[0] = true;
    // result[1] = true;
    // result[2] = true;
    // result[3] = true;
    // for(var i=4;i<=n;i++){
    //     result[i] = !(result[i-1]&&result[i-2]&&result[i-3]);
    // }
    // return result[n]; 
    
    //simple answer
    return n%4!=0;
};