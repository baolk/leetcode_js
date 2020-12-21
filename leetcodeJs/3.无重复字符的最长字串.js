/*
 * [3] 无重复字符的最长子串
 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
//sliding window 滑动窗口
//创建一个set和两个指针，指针i递增，若set没有该元素则加入；
    //使用set是因为set不允许重复的元素出现
//若有该元素则删除j所指向的元素，递增j，判断set里是否还有该元素，直到没有该元素为止，添加s[i];

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let i=0,j=0,maxlength=0;
    if(s.length === 0){
        return 0;
    }
    for(i;i<s.length;i++){
        if(!set.has(s[i])){
            set.add(s[i]);
            maxlength = Math.max(maxlength,set.size);
        }else{
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }
    return maxlength;
};
