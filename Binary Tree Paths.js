/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
//var binaryTreePaths = function(root) {
    //method1 recursion dfs
//     var output = [];
//     helper(root,"",output);
//     return output;
// };

// var helper = function(root,path,output){
//     if(!root)
//         return;
//     if(!root.left&&!root.right){
//         output.push(path+root.val); 
//     }
//     helper(root.left,path+root.val+"->",output);
//     helper(root.right,path+root.val+"->",output);
// }

//method2 dfs+stack
var binaryTreePaths = function(root) {
   if(!root)
       return [];
   var output = [];
   var nodeStack = [];
   var stringStack = [];
   nodeStack.push(root);
   stringStack.push("");
   while(nodeStack.length!=0){
        var curnode = nodeStack.pop();
        var curstr = stringStack.pop();
        if(curnode.left==null&&curnode.right==null){
            output.push(curstr + curnode.val);
        }
        if(curnode.right!=null){
           nodeStack.push(curnode.right);
           stringStack.push(curstr + curnode.val + "->");
        }
       if(curnode.left!=null){
           nodeStack.push(curnode.left);
           stringStack.push(curstr + curnode.val + "->");           
        }
    }
    return output;
};
