/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
    let count=0;
    numbers
      .map(item=> Math.pow(item,2))
      .reduce((prev,item)=> {
        console.log(item);
        count+=item;
        },0)
    
    return count
  }

  squareSum([1,2])
  console.log()
  console.log()
  console.log()
