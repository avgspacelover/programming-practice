// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function myReplace(str, before, after) {
  
  
    if(/[A-Z]/.test(before[0])){
      after=after[0].toUpperCase()+after.substr(1)
      console.log("after",after)
    }else if(/[a-z]/.test(before[0])){
      after=after[0].toLowerCase()+after.substr(1)
  
    }
    
    return str.replace(before,after);
  }
  
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");