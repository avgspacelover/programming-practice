// https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }