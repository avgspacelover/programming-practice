// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
    let current = 0;
 
     for (i = 0; i < arr.length; i++) {
         if (arr[current] === 0) {
             arr.splice(current, 1);
             arr.push(0);
         } else current++;
     }
 
     return arr;
 }


 /*
 ALTERNATIVES

 var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
-------------------------------
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}
---------------------------------
var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
--------------------------------
var moveZeros = function (arr) {
  let result = arr.filter(c => c !== 0)
  let count = arr.length - result.length
  
  return result.concat(Array(count).fill(0))
}
*/