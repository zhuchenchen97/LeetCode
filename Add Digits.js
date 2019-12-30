/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // if(num<10)
    //     return num;
    // var sum = 0;
    // while(num>0){
    //     var remain = num%10;
    //     sum+=remain;
    //     num = Math.floor(num/10);
    // }
    // var out = addDigits(sum);
    // return out;
    
    var sum = 0;
    while(num>9){
       while(num>0){
        var remain = num%10;
        sum+=remain;
        num = Math.floor(num/10);           
       }
       num = sum;
       sum = 0;
    }
    return num;
};