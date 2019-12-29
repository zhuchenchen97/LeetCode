/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // var n2 = n.toString(2);
    // n2 = n2.split('');
    // var sum = 0;
    // for(let i of n2){
    //     if(i=='1')
    //         sum++;
    // }
    // return sum;
    
    return n.toString(2).replace(/0/g, '').length;
};