// https://leetcode.com/problems/valid-anagram/



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
    let obj= {}
    
    for(let item of s){
        if(obj[item]){
            obj[item]= obj[item]+1
        } else {
            obj[item]=1
        }
    }
        
    for(let item of t){
        if(obj[item]== 0 || !obj[item]){
            return false
        } else {
            obj[item] = obj[item]-1;
        }
    }
    for(let item in obj){
        if(obj[item]>=1) return false
    }
    
    return true;
};