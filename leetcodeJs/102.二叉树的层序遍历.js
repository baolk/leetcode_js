/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
//层序遍历
//维护一个队列，当前父节点出列时，子节点入列
var levelOrder = function(root) {
    if(!root) return [];

    let res = [];
    let queue = [root];

    while(queue.length){
        let subRes = [];
        let len = queue.length;
        for(let i=0;i<len;i++){
            let cur = queue.shift();
            subRes.push(cur.val)
            if(cur.left)queue.push(cur.left)
            if(cur.right)queue.push(cur.right)
        }
        res.push(subRes);
    }

    return res;
};
// @lc code=end

