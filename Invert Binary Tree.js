/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //method1 recursion DFS
    // if(!root)
    //     return null;
    // var left = root.left;
    // var right = root.right;
    // root.left = invertTree(right);
    // root.right = invertTree(left);
    // return root;
    
    //method2 using stack DFS
//     var stack = [];
//     if(!root)
//         return null;
//     stack.push(root);
//     while(stack.length!=0){
//         var node = stack.pop();
//         var left = node.left;
//         node.left = node.right;
//         node.right = left;
        
//         if(node.left){
//             stack.push(node.left);
//         }
//         if(node.right){
//             stack.push(node.right);
//         }
//     }
//     return root;
    
    //method3 queue bfs
    var queue = [];
    if(!root)
        return null;
    queue.push(root);
    while(queue.length!=0){
        var node = queue.pop();
        var left = node.left;
        node.left = node.right;
        node.right = left;
        
        if(node.left){
            queue.unshift(node.left);
        }
        if(node.right){
            queue.unshift(node.right);
        }
    }
    return root;
};