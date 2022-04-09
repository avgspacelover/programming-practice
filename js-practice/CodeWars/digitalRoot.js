// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript


function digital_root(n) {
    console.log("initial", n)
    let sum=0
    
    while(n>0){
      
      sum+= n%10
      console.log("sum",sum)
      n= Math.floor(n/10)
      console.log("num",n)
      
    }
    if(sum>9){
      return digital_root(sum)
    } else{
        console.log("final sum",sum)
        return sum}
  }








/*
function digital_root(sum) {
   
    while (sum > 9) {
       let arr = sum.toString().split("")
       sum = arr.reduce((a,b) => +a + +b);
    }
    return sum
 }
 ---------------------------
 function digital_root(n) {
  return (n - 1) % 9 + 1;
}
-----------------------------
function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}
-----------------------------
function digital_root(n) {
  if (n < 10) return n
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
}
*/