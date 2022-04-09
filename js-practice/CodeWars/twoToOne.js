/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/


function longest(s1, s2) {
    let values={}
    let str=""
    s1+=s2
    
    s1.split("").reduce((prev,item,i)=> {
      
      if(!values.hasOwnProperty(item)){
        
        values[item]=1;
        
        str+=item
      } 
    },0 )
    return str.split("").sort().join("");
  }

  console.log(longest("aretheyhere", "yestheyarehere"))
  console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"))
  console.log(longest("inmanylanguages", "theresapairoffunctions"))
  

