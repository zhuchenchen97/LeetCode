/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    //method1 iteration
    var num=1;
    for(var i=0; num<=n; i++){
        if(num == n)
            return true;
        num = num*2;
    }
    return false;
    
    //method2 magic math
    //return n > 0 && ((n & (n-1)) == 0);
};