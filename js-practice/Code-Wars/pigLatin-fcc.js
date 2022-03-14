// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
    let vowel=["a","i","e","o","u"]
  
    let index=1000;
    for(let i=0;i<str.length;i++){
      if(vowel.includes(str[i])){
        index=i-1;
        break;
      }
    }
  let s;
   if(index==1000){
     s=str.concat("ay")
   }else if(index>0){
     let c=str.substr(0,index+1) //
     s=str.substr(index+1).concat(c).concat("ay")
   }else if(index==0){
     s=str.substr(index+1).concat(str[0]).concat("ay")
  
  
   }else{
     s=str.concat("way")
  
   }
      
    console.log(str,s, index)
    return s;
  }
  
  translatePigLatin("consonant");
  
  // console.log(translatePigLatin("consonant"));
  // console.log(translatePigLatin("algorithm"));
  // console.log(translatePigLatin("schwartz"));
  