/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   var lens = s.length;
   var lent = t.length;
   if(lens!=lent)
       return false;
   var visited={};
   for(var i=0;i<lens;i++){
       if(!visited.hasOwnProperty(s[i])){
           for(var ch in visited){
               if(visited[ch]==t[i])
                   return false;
           }
           visited[s[i]]=t[i];
           
       }
           
       else if(visited[s[i]]!=t[i])
           return false;
   }
    return true;
};