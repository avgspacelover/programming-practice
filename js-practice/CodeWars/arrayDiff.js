// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
    if(!a){
      return []
    } else if(!b || b.length<1) {
        return a;
    }
  
   let c= [...a]
  
   b.map((item) => {
  
  
    a.map((elem,i) =>{
  
      if(item==elem){
        c.splice(c.indexOf(elem),1)
      }
  
    })
  
   })
  
    return c;
  }