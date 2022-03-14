// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  
    let s= str.split(" "), stri="";
    
    
    s.map((item,index) => {
      console.log("item", item)
      if(!/\W/.test(item)){
        
        let k=s[index],m=k.substr(0,1);
  
        k=k.replace(m,"");
        s[index]=k+m+"ay";
        
        
      }
      if(index!==(s.length-1))
        s[index]+=" "
      
    })
    
    s.map((item,index)=>{
      
        stri+=s[index];
      
      }
    
    )
    
    return stri;
  }  

  /*
  ALTERNATIVES
  function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
--------------------------
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
---------------------------
function pigIt(str){
  //Code here
  return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}
*/