/*

const canConstruct = (target,wordBank) => {

    if(target === ''){
        return true;
    }

    for(let word of wordbank){

        if(target.indexOf(word) ==0){
            const suffix = target.slice(word.length);

            if(canConstruct(suffix, wordbank) == true){

                return true
            }
        }
    }

    return false;
}

brute force

m= target.length
n= wordBank.length
time: O(n^m * m)
space: O(m^2)
*/


const canConstruct = (target,wordBank, memo={}) => {

    if(target in memo) return memo[target];
    if(target === ''){
        return true;
    }

    for(let word of wordbank){

        if(target.indexOf(word) ==0){
            const suffix = target.slice(word.length);

            if(canConstruct(suffix, wordbank, memo)){
                memo[target]= true;
                return true
            }
        }
    }

    memo[target]= false;
    return false;
}
/*
memoized
time: O(n*m^2)
space: O(m^2)
*/