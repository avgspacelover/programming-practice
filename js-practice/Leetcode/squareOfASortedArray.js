// https://leetcode.com/problems/squares-of-a-sorted-array/
// two pointer 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function calc(n){
    return Math.pow(n,2)
}
var sortedSquares = function(nums) {


// let ans = nums.map(item=> calc(item)).sort(function(a,b){return a-b});

    let start= 0
    let end= nums.length-1
    let k= end
    let ans =[]
    while(start<=end){
        if(nums[start]**2 > nums[end]**2){
            
            ans[k--]= nums[start++]**2
        
        } else {
            
            ans[k--]= nums[end--]**2
        }
    
    }
    
    
    return ans
};

