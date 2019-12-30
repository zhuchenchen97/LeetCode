/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var visiteds = {};
    s=s.split('');
    t=t.split('');
    for(var i=0;i<s.length;i++){
        if(!visiteds.hasOwnProperty(s[i]))
           visiteds[s[i]]=1;
        else
            visiteds[s[i]]++;
    }
    for(var i=0;i<t.length;i++){
        if(!visiteds.hasOwnProperty(t[i]))
           return false;
        else
            visiteds[t[i]]--;
    }
    for(var ch in visiteds){
        if(visiteds[ch]!=0)
            return false;
    }
    return true;
};