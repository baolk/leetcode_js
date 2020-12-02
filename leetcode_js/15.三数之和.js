/*
 * [15] 三数之和
给你一个包含 n 个整数的数组 nums
判断 nums 中是否存在三个元素 a，b，c 
使得 a + b + c = 0 
请你找出所有满足条件且不重复的三元组

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//1.排序
//2.遍历数组从0到length-2（最后两位一定是start和end）
//3.如果当前数字等于前一个数字，则跳过这个数（避免重复）
//4.如果数字不同，则设置start=i+1;end=length-1;查看i,start和end与0的大小关系；
//5.比0小则start++;比0大则end--;等于0则返回结果
var threeSum = function(nums) {
  const result = [];
  nums.sort(function(a,b){
    return a-b;
  });

  for(let i = 0;i<nums.length -2;i++){
    if(i===0 || nums[i]!==nums[i-1]){
      let start = i+1;
      let end = nums.length-1;
      while(start < end){
        if(nums[i]+nums[start]+nums[end]===0){
          result.push([nums[i],nums[start],nums[end]]);
          start++;
          end--;
          //去掉重复的数据
          while(start<end&&nums[start] === nums[start-1]){
            start++;
          }
          while(start<end&&nums[end] === nums[end+1]){
            end--;
          }
        }else if(nums[i]+nums[start]+nums[end]<0){
          start++;
        }else{
          end--;
        }
      }

    }
  }
  return result;
};
