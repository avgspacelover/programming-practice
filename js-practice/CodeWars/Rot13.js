// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript


let a = 97;
let charArray = {};
for (var i = 1; i<=26; i++)
    charArray[String.fromCharCode(a + i -1)] = i;
let A = 65;

for (var i = 1; i<=26; i++)
    charArray[String.fromCharCode(A + i -1)] = i*100;


function checkRot(char,iter,lim){
  
  let val;
  let ans = []
  
   if (charArray[char] + iter >lim){
        val = charArray[char]-iter

        return Object.keys(charArray).find(key => charArray[key] == val)

    } else{
        val = charArray[char]+ iter
    
        return Object.keys(charArray).find(key => charArray[key] == val)
      
    }
  
}

function rot13(message){


  let letters = message.split('')
  console.log(letters)
  let ans= []
  let regx = /^[02!@#\d$%^&.,+-\s]$/gm

  letters.forEach(char => {
    console.log("char", char)
    if(regx.test(char)){
      console.log("direct")
      ans.push(char)
    }else  if(regx.test(char)){
      console.log("direct")
      ans.push(char)
    }else if(charArray[char]>99){
      ans.push(checkRot(char,1300,2600))
      
    }else{
       ans.push(checkRot(char,13,26))
      
      }
    console.log("ans", ans)
    
  })
      return ans.join('')
}
