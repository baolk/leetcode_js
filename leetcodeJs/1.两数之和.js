/*
 * [1] 两数之和
 Given nums = [2,7,15] target = 9
 Beacase num[0]+num[1]=9
 return [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//map存储记录
//1.创建一个map
//2.遍历num数组，用target减去nums[i]
//3.得到的值去map里找是否存在，若存在则返回；不存在则将nums[i]当作key,index当作value存入
//  这是因为要使用map.has()方法判断key是否存在
var twoSum = function(nums,target){
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        const complement = target - nums[i];
        if(map.has(complement)){
            let result = [map.get(complement),i];
            return result;
        }else{
            map.set(nums[i],i);
        }
    }
};

