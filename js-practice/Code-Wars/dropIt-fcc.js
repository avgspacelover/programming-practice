// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it



function dropElements(arr, func) {
    let newArr= [];
  
    for(let i=0;i<arr.length;i++){
      
      if(func(arr[i])){
        
        console.log(func(arr[i]))
        newArr=arr.slice(i,arr.length);
        
        break;
        
      } 
    }
    return newArr;
  }
  
  dropElements([1, 2, 3,4], function(n) {return n >= 3; });