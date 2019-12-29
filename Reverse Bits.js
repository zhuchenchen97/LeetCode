/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    //method1
    // n=n.toString(2);
    // while(n.length<32){
    //     n='0'+n;
    // }
    // var n2 = n.split('');
    // n2 = n2.reverse();
    // n2 = n2.join('');
    // return parseInt(n2, 2);
var result = 0;
for (var i = 0; i < 32; i ++) {
    
    if (n & 1 === 1) {
        result += 1;
    }
    if(i<31)
      result <<= 1;
    n >>= 1;
}
return result>>>0;
};