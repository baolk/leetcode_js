/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] === newColor) return image;

    const oldColor = image[sr][sc];

    function dfs(sr,sc){
        if(sr<0||sr>=image.length ||sc<0||sc>=image[0].length||image[sr][sc]!==oldColor){
            return;
        }else{
            image[sr][sc] = newColor;
            dfs(sr-1,sc);
            dfs(sr+1,sc);
            dfs(sr,sc-1);
            dfs(sr,sc+1);
        }
    }

    dfs(sr,sc);
    return image;
};
// @lc code=end

