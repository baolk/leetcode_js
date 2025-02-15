/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
//搜索到1之后，向四个方向扩散，然后沉没岛屿
//bfs --- 广度优先搜索
//dfs --- 深度优先搜索
var numIslands = function(grid) {
    let count = 0;
    function dfs(row,col){
        if(row<0||row>=grid.length||col<0||col>=grid[0].length||grid[row][col] === "0"){
            return;
        }else{
            grid[row][col] = "0";
            dfs(row-1,col);
            dfs(row+1,col);
            dfs(row,col-1);
            dfs(row,col+1);
        }
    }
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(grid[row][col] === "1"){
                count++;
                dfs(row,col);
            }
        }
    }
    return count;
};
// @lc code=end

