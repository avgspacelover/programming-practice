// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    let obj= {}, res;
    
    A.map((item)=>{
      if(obj.hasOwnProperty(item)){
        obj[item]+=1
        
      } else{
        obj[item]=1;
      }
    })
    
   Object.keys(obj).map((item) =>{
      if(obj[item]%2!==0){
        res=item;
    }
    })
    return parseInt(res);
  }

  /*
    ALTERNATIVES
    GENIUS!!
    const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
  */