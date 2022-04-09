// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

/*
 #of occur-> postion in string
 sepa by dash
 first letter-> caps


*/
function accum(s) {
    var new_arr=[];
    let arr= s.split("")
    console.log(arr);
      arr.reduce((prev,item,index) =>{
      let temp=[];
      console.log("current value, index",item,index);
      for(let i=0; i<=index;i++){
        console.log(item);
        if (i===0){
          temp.push(item.toUpperCase());
        } else{
            temp.push(item.toLowerCase());
  
           }     
           console.log(temp);    
  
      }
      
      new_arr.push(temp.join(""));
      console.log(new_arr);
      
  
    }, 0)
  
    return new_arr.join("-");
  }
  accum("ZpglnRxqenU")
  // expected- "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

  /*
  function accum(str){
    let result = ''

    for (let i = 0, len = str.length; i < len; i++){
        result += str[i].toUpperCase()
        result = result.padEnd(i + result.length, str[i].toLowerCase())

        if (i !== len-1)
            result += "-"
    }

    return result
}
-------------------------------------------------------

function accum(str){
    let result = ''

    for (let i = 0, len = str.length; i < len; i++){
        result += str[i].toUpperCase()
        result = result.padEnd(i + result.length, str[i].toLowerCase())

        if (i !== len-1)
            result += "-"
    }

    return result
}

*/