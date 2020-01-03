/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var bulls = 0;
    var cows = 0;
    var record=[];
    for(var i = 0; i<secret.length; i++){

        if(secret[i]==guess[i]){
            bulls++;
        }else{
            if(record[secret[i]]==undefined)
                record[secret[i]]=1;
            else
                record[secret[i]]++;
            if(record[guess[i]]==undefined)
                record[guess[i]]=-1;
            else
                record[guess[i]]--;
            if(record[secret[i]]<=0)
                cows++;
            if(record[guess[i]]>=0)
                cows++;
        }
    }
    return bulls+'A'+cows+'B';
};