/* https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
    let str= ""
    string.split("").map((item) => {
      if(item.charCodeAt(0)<97){
        let k=" " + item;
        str+=k;
        console.log("stri",str)
      }else {
        str+=item
        console.log("str",str)
      }
      
    })
     return str;
 }