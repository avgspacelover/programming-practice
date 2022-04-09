// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

function sumPrimes(num) {
    let i=2,k=0, sum=0;
    while(i<=num){
      let flag=0;
      console.log("i",i)
      for(let j=2; j<i; j++){
        if(i%j==0){   //THIS    
          flag=1
        }
      }
      if(!flag){
        sum+= i;
        console.log("sum",sum)
      }
      i++
  
    }
    return sum;
  }
  
  sumPrimes(10);