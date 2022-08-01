// ADD CODE HERE
// https://csx.codesmith.io/units/callbacks/challenge-reduce

const reduce= (array, callback, initialVal)=> {
  
    if(Array.isArray(array)){
      
      let acc;
      
      if(initialVal == undefined){
        acc= array[0]
        array= array.splice(1)
      } else{
        acc= initialVal
      }
      
      array.forEach(function(elem){
        acc= callback(acc, elem)
      })
      
      return acc;
      
    }
    
          return 'The arg should be an array'
  }
  // Uncomment these to check your work!
   const nums = [4, 1, 3];
   const add = function(a, b) { return a + b; }
  console.log(reduce(nums, add, 0)); // should log 8