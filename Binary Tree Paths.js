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
var binaryTreePaths = function(root) {
    //method1 recursion
    var output = [];
    helper(root,"",output);
    return output;
};

var helper = function(root,path,output){
    if(!root)
        return;
    if(!root.left&&!root.right){
        output.push(path+root.val); 
    }
    helper(root.left,path+root.val+"->",output);
    helper(root.right,path+root.val+"->",output);
}