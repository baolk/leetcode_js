/*
 * [66] 加一
 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
 for(let i=digits.length-1;i>=0;i--){
     if(digits[i]!==9){
         digits[i]++;
         return digits;
     }else{
         digits[i]=0;
     }
 }

 //特殊性 全是9的
 const result = [1,...digits];  //ES6的写法
 return result;
};