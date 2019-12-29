/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // var sum=0;
    // for(var i=1; i<n; i++){
    //     if(isPrime(i))
    //         sum++;
    // }
    // return sum;
    
    //method2: iteration
    if(n<=1)
        return 0;
    var isPrime = [];
    for (var i = 0; i < n; i++) {
        isPrime[i] = true;
    }
    isPrime[0] = false;
    isPrime[1] = false;
    for(let i=2; i<Math.sqrt(n); i++){
        for(var j=2;j*i<n;j++){
             isPrime[j*i] = false;
        }
    }
    var count=0;
    for(var i=2;i<n;i++){
        if(isPrime[i])
            count++;
    }
    return count;
};

// var isPrime = function(n){
//     if(n==1)
//         return false;
//     if(n<=3)
//         return true;
//     var fac = Math.sqrt(n);
//     for(var i=2; i<=fac; i++){
//         if(n%i==0)
//             return false;
//     }
//     return true;
// }