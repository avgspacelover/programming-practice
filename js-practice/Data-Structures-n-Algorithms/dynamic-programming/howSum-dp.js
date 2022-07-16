/*
Inefficient algo

const howSum = (targetSum,numbers) => {
if (targetSum===0) return [];
if (targetSum < 0 ) return null;

for (let num of numbers){
    const remainder = targetSum-num;
    const remainderResult = howSum(remainder, numbers);
    if(remainderResult !== null){
        
        return [...remainderResult, numbers];

    }
}
return null;

}


brute force

time : O(n^m * m)
space: (O(m))

memoized

time: O(n*m^2)
space: (m^2)
*/


const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0 ) return [];
    if (targetSum < 0 ) return null;

    for(let num of numbers){
        const remainder = targetSum - num;
        let remainderResult = howSum(remainder, numbers, memo) ;
        if(remainderResult !== null){
            memo[targetSum]= [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum]=null ;
    return null;
}