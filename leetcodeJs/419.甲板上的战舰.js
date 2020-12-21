/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
//沉没法
var countBattleships = function(board) {
    let result = 0;
    function dfs(row,col){
        if(row<0||row>=board.length||col<0||col>=board[0].length||board[row][col] !== "X"){
            return;
        }else{
            board[row][col] = ".";
            dfs(row-1,col);
            dfs(row+1,col);
            dfs(row,col-1);
            dfs(row,col+1);
        }
    }

    for(let row=0;row<board.length;row++){
        for(col=0;col<board[0].length;col++){
            if(board[row][col] === "X"){
                result++;
                dfs(row,col);
            }
        }
    } 

    return result;
};
// @lc code=end

