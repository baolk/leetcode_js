/*
 * [56] 合并区间
 给出一个区间的集合，请合并所有重叠的区间
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2){
        return intervals;
    }

    intervals.sort(function(a,b){
        return a[0]-b[0];
    });

    let curr = intervals[0];
    let result = [];
    for(let i of intervals){
        if(curr[1]>=i[0]){
            curr[1] = Math.max(curr[1],i[1]);
        }else{
            result.push(curr);
            curr = i;
        }
    }

    if(curr.length!==0){
        result.push(curr);
    }

    return result;

};


