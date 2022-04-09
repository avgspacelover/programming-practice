// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
    const alphabet= "abcdefghijklmnopqrstuvwxyz"
   
    let j=0, k=alphabet.indexOf(str[0]);
    for(let i= k ; i<k+str.length; i++){
      
      console.log("alp",alphabet[i], str,str[0])
      if(alphabet[i]!== str[j]){
        
        return alphabet[i];
  
      }
      j++;
  
    }
    return undefined;
    
  }
  
  

