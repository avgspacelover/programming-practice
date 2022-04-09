//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s)
{
  let len= s.length,str="";
  
  if(len%2==0){
     let i= len/2 -1
     str+=s[i]+ s[i+1];
    
  } else {
    let i= Math.floor(len/2);
    
    str+=s[i];
  }
  
  return str;
}

/*
ALTERNATIVES

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

-----------------------
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
*/