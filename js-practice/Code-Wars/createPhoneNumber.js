// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// 6 kyu

function createPhoneNumber(numbers){
  
    let str="("
    
    numbers.map((item,index) => {
      
        if(index==2){
          str= str+ item+ ")"+ " ";
          
        } else if(index==5){
            str=str+ item+ "-";
        } else{
            str+= item;
        }
          
        }
    )
    
    return str;
  }

  /*
  ALTERNATIVES
  function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
  ---------------------
  function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}
------------------------
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
}

  */