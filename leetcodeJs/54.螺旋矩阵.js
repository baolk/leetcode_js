/*
 * [54] 螺旋矩阵
 给定一个包含 m x n 个元素的矩阵（m 行, n 列）
 请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//遍历顺序为右、下、左、上
//定义边界
var spiralOrder = function(matrix) {
    if(matrix.length === 0){
        return [];
    };

    let top=0;
    let bottom = matrix.length -1;
    let left =0;
    let right = matrix[0].length-1;

    let direction = "right";
    let result = [];

    while(left<=right&&top<=bottom){
        if(direction === "right"){
            for(let i=left;i<=right;i++){
                result.push(matrix[top][i]);
            }
            top++;
            direction = "down";
        }else if(direction === "down"){
            for(let i=top;i<=bottom;i++){
                result.push(matrix[i][right]);
            }
            right--;
            direction = "left";
        }else if(direction === "left"){
            for(let i=right;i>=left;i++){
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = "top";
        }else if(direction === "top"){
            for(let i=bottom;i<=top;i++){
                result.push(matrix[i][left]);
            }
            left++;
            direction = "left";
        }
    }
    return result;
};

