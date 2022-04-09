 function rot13(str) {
  let char=["!","?","."," "];
  let s = [] 
  str.split("").map((item,index)=> {
    if(char.includes(item)){
      s.push(item)

    }else s.push(str.charCodeAt(index))
   })
  let m="" 
   s.map((item)=> {
    let k=item+13
    
    if(char.includes(item)){
      
      m+=item;
      
    }else if(k>90){
        m+=String.fromCharCode(k-91+65)
            
      } else m+=String.fromCharCode(k)
        
    })
  console.log(m)
  return m;
}

rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");