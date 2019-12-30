/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //method1 recursion
    if(!root)
        return null;
    if(p.val<root.val&&q.val<root.val){
        return lowestCommonAncestor(root.left,p,q);
    }
    if(p.val>root.val&&q.val>root.val){
        return lowestCommonAncestor(root.right,p,q);
    }
    else
        return root;
    
    //method2 iteration
    // while(root){
    //     if(p.val<root.val&&q.val<root.val)
    //         root=root.left;
    //     if(p.val>root.val&&q.val>root.val)
    //         root=root.right;
    //     else
    //         return root;
    // }
    // return null;
};