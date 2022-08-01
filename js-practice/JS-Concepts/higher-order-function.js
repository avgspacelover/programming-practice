// ADD CODE HERE

const forEach = (arr, callback) => {
    let i =0
while(i <arr.length){
callback(arr[i])
i++
}
}

const map= (arr, call)=> {
const results= []

forEach(arr, function(element){
  
results.push(call(element))

})

return results;
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]



// https://csx.codesmith.io/units/callbacks/challenge-either-callback

function eitherCallback(callback1, callback2) {

    return  (element, i, array) => {
    	return callback1(element, i , array) || callback2(element, i ,array)
  }
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]