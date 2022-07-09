// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript


var maxSequence = function(arr){
  
    let max= arr[0], sum=0
    let  k=0
    arr.forEach(item=> {
      if(item>0){
        k+=1
      }else{ 
        k+=0
      }
    })
    if(arr.length == 0 || k ==0)return 0
    for(let i=0; i<arr.length; i++){
      
      sum+= arr[i]
  
      max= Math.max(max,sum)
      if(sum<0) sum = 0
    }
    
    
    return max
  }