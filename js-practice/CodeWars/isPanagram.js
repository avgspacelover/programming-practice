function isPangram(string){
  
    let obj = {}
    string = string.toLowerCase()
    for(let i in string){
      
      if(string[i].match(/[a-z]/gi)){
        
        obj[string.charCodeAt(i)]= string[i]
      }
    }
  
    
    if( Object.keys(obj).length == 26) return true;
    
    return false
    
    
  }


  function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}