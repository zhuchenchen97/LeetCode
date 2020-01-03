/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
   var str = str.split(' ');
   var visited={};
   if(pattern.length!=str.length)
        return false;
   for(var i=0; i<pattern.length;i++){
       if(!visited.hasOwnProperty(pattern[i])){
           for(var key in visited){
               if(visited[key]==str[i])
                   return false;
           }
           visited[pattern[i]] = str[i];
       } 
       else{
           if(visited[pattern[i]]!=str[i])
               return false;
       }
   }
   return true;
};