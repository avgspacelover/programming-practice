
const canSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if (targetSum===0) return true;
    if(targetSum < 0) return false;

    for (let number of numbers){
        const remainder = targetSum - number;

       if(canSum(remainder, numbers, memo) === true) {
        memo[targetSum]= true;
        return true;
       }
    }

    memo[targetSum] = false;
    return false;
}

console.log( canSum(7, [12,10,90,29]))