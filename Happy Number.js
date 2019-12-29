/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var visited = {};
    var remain,sum;
    while(!visited[n]){
        visited[n] = true;
        sum=0;
        while(n>0){
            remain = n%10;
            sum+=remain*remain;
            n=Math.floor(n/10); //!important
        }
        if(sum==1)
            return true;         
        n=sum;
    }
    return false;
};