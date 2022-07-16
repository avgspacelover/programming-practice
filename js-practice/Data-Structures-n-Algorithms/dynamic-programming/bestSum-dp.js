/*

const bestSum = (targetSum, numbers) =>{

    if(targetSum=== 0) return [];
    if(targetSum<0) return null;

    let shortestCombination = null;

    for(let num of numbers){

        const remainder= targetSum- num;
        let combination = bestSum(remainder,numbers);

        if(shortestCombination == null ||combination.length < shortestCombination.length){
            shortestCombination= combination;
        }
    }

    return shortestCombination;

}

brute force
time: O(n^m *m)
space: O(m^2)

memoized
time: O(m^2*n)
space: O(m^2)

*/

const bestSum = (targetSum, numbers, memo={}) =>{

    if(targetSum in memo) return memo[targetSum];
    if(targetSum=== 0) return [];
    if(targetSum<0) return null;

    let shortestCombination = null;

    for(let num of numbers){

        const remainder= targetSum- num;
        let combination = bestSum(remainder,numbers, memo);

        if(shortestCombination == null ||combination.length < shortestCombination.length){
            shortestCombination= combination;
        }
    }

    memo[targetSum]= shortestCombination;
    return memo[targetSum];

}