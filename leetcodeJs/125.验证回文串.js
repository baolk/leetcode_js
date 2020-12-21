/*
 * [125] 验证回文串
 给定一个字符串，验证它是否是回文串
 只考虑字母和数字字符，可以忽略字母的大小写
 Given nums = [2,7,15] target = 9
 Beacase num[0]+num[1]=9
 return [0,1]
 */

var isPalindrome = function(s) {
    if(s.length === 0) return true;

    let newS = s.toUpperCase();
    let string = "";
    for(let i=0;i<newS.length;i++){
        if( (48<=newS.charCodeAt(i))&&(newS.charCodeAt(i)<=57)||
            (65<=newS.charCodeAt(i))&&(newS.charCodeAt(i)<=90)){
            string += newS[i];
        }
    }
    let length = string.length;
    for(let i=0;i< Math.floor(string.length/2);i++){
        if(string[i] === string[length-i-1]){
           continue;
        }else{
            return false;
        }
    }
    return true;

};

