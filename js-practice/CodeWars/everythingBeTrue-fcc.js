// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

function truthCheck(collection, pre) {
    let flag=0
    collection.map((item,i) => {
      
  
        if(item.hasOwnProperty(pre) && item[pre] && flag>=0){
            console.log(collection, true)
            flag=1;
        } else{
          flag= -10;
          
        }
      
    })
    if (flag>0){return true }else return false;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");