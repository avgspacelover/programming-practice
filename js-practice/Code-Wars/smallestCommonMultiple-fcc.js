// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
    let init, fin,loopinit, n=Number.MAX_SAFE_INTEGER;
    if(arr[0]< arr[1]){
      init=arr[0], fin=arr[1],loopinit=arr[1]+1;
  
    } else if (arr[1] <arr[0]){
      init=arr[1], fin=arr[0],loopinit=arr[0]+1;
  
    }
    console.log("arr",arr)
  
    for(let i=loopinit;i<=n; i++){
        let flag=0;
      for(let j=init;j<=fin; j++){
        //console.log("i", i, "j", j)
        if(i%j!==0){
          flag=1
          break;
        
        }  
  
  
      }
      if(!flag){
        console.log("ans", i)
        return i;
        
      
      }
  
    }
  }
  
  smallestCommons([1,5])

  /*

    function smallestCommons(arr) {

  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let multiple = max;

  for(let i = max; i >= min; i--){
    if(multiple % i !== 0){
      multiple += max; 
      i = max;
    }
  }

  return multiple; 
}

console.log(smallestCommons( [1 ,5] ))
  */