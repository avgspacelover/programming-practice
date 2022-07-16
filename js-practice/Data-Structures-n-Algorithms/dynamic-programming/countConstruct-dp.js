/*

const countConstruct = (target,wordBank) => {

    if(target === ''){
        return 1;
    }
    let totalCount=0;
    for(let word of wordbank){

        if(target.indexOf(word) ===0){
            const suffix = target.slice(word.length);

            const numwaysForRest =countConstruct(suffix, wordbank);
            totalCount += numwaysForRest;
        }
    }

    return totalCount;
}

brute force

m= target.length
n= wordBank.length
time: O(n^m * m)
space: O(m^2)
*/

const countConstruct = (target,wordBank, memo={}) => {

    if(target in memo) return memo[target];
    if(target === ''){
        return 1;
    }
    let totalCount=0;
    for(let word of wordbank){

        if(target.indexOf(word) ===0){
            const suffix = target.slice(word.length);

            const numwaysForRest =countConstruct(suffix, wordbank,memo);
            totalCount += numwaysForRest;
        }
    }
    memo[target]= totalCount
    return totalCount;
}
/*
memoized
time: O(n*m^2)
space: O(m^2)
*/