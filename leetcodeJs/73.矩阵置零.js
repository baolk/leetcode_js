/*
 * [73] 矩阵置零
 给定一个 m x n 的矩阵，如果一个元素为 0
 则将其所在行和列的所有元素都设为 0
 请使用原地算法
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//这题的难点在于不能开辟新的数组，要在原数组内处理
var setZeroes = function(matrix) {
    let firstColHasZero = false;
    let firstRowHasZero = false;
    //检查并标记第一行和第一列是否有0
    for(let i =0;i<matrix[0].length;i++){
        if(matrix[0][i] === 0){
            firstRowHasZero = true;
        }
    }
    for(let i =0;i<matrix.length;i++){
        if(matrix[i][0] === 0){
            firstColHasZero = true;
        }
    }
    //使用第一行列标记其余行列是否含有0
    for(let row = 1;row<matrix.length;row++){
        for(let col=1;col<matrix[0].length;col++){
            if(matrix[row][col]===0){
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }
    //利用第一行列的标0情况，将matrix标0
    for(let row = 1;row<matrix.length;row++){
        for(let col=1;col<matrix[0].length;col++){
            if(matrix[0][col]===0||matrix[row][0] === 0){
                matrix[row][col] = 0;
            }
        }
    }
    //最后，处理第一行列原本就有0的情况
    if(firstColHasZero){
        for(let i =0;i<matrix.length;i++){
            matrix[i][0] = 0;
        }
    }
    if(firstRowHasZero){
        for(let i =0;i<matrix[0].length;i++){
            matrix[0][i] = 0;
        }
    }
};
