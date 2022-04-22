// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

function findNb(m) {
    let n=1
     let sum=0
     while(n){
       if(sum<m){
         sum+=Math.pow(n,3)
         
       }else if(sum==m){
         return n-1;
       } else if(sum>m){
         return -1;
       }
       n++;
     }
     
   
   
   }
   

/*

function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
  }
//-------------------------
  function findNb(m) {
    let n = 0;
    let sum = 0;
    while (sum < m) {
      n++;
      sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
  }
//----------------------------------
  function findNb(m) {
    // your code
  var n = 0;

  while (m > 0) m -= Math.pow(++n, 3);

  return m ? -1 : n;
}
//-------------------------------------
function findNb(m) {
  for(var i = 1, sum = 0; sum < m; sum+=i*i*i, i++);
  return sum == m ? (i-1) : -1;
}
//--------------------------------------
function findNb(m) {
  var x = 0.5*(Math.sqrt(8*Math.sqrt(m) + 1) - 1 );
      return x == Math.ceil(x) ? x:-1;
  }
  
//---------------------------------------
*/