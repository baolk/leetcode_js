/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = new Map();

    function helper(preorder,p_start,p_end,inorder,i_start,i_end,map){
        if(p_start > p_end) return null;
        let rootVal = preorder[p_start];
        let root = new TreeNode(rootVal);
        let mid = map.get(rootVal);
        let leftNum = mid - i_start;
        root.left = helper(preorder,p_start+1,p_start+leftNum,inorder,i_start,mid-1,map);
        root.right = helper(preorder,p_start+leftNum+1,p_end,inorder,mid+1,i_end,map);
        return root;
    }

    for (let i = 0;i<inorder.length;i++){
        map.set(inorder[i],i)
    }
    return helper(preorder,0,preorder.length -1,inorder,0,inorder.length -1,map);
};


// @lc code=end

