/*

const allConstruct = (target, wordbank) => {
    if(target === '') return [[]] ;

    const result = []
    
    for(let word of wordbank){
        if(target.indexOf(word) === 0){
            const suffix= target.slice(word.length);
            const suffixWays= allConstruct(suffix, wordbank);
            const targetWays= suffixWays.map(way => [word, ...way])
            result.push(...targetWays);
        }
    }

    return result;
}

*/


const allConstruct = (target, wordbank, memo= {}) => {

    if(target in memo) return memo[target];
    if(target === '') return [[]] ;

    const result = []
    
    for(let word of wordbank){
        if(target.indexOf(word) === 0){
            const suffix= target.slice(word.length);
            const suffixWays= allConstruct(suffix, wordbank, memo);
            const targetWays= suffixWays.map(way => [word, ...way])
            result.push(...targetWays);
        }
    }
    memo[target]= result;
    return result;
}


/*
time: O(n^m)
space: O(m)
*/