// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
    let i=signature[0], j=signature[1], k=signature[2],h=0,arr=[];
    
    if(n==0){
      
      return arr;
    } else if(n==1){
      
      arr.push(i)
      return arr;
    } else if(n==2){
      
      arr.push(i,j)
      return arr;
    }
  
    arr.push(i,j,k)
    let ct=3
    
    while(ct<n){
      ++ct
      h=i+j+k;
      arr.push(h)
      i=j
      j=k
      k=h  
      
    }
    return arr;
    
  }
  /*
    function tribonacci(signature,n){  
        for (var i = 0; i < n-3; i++) { // iterate n times
            signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
        }
        return signature.slice(0, n); //return trib - length of n
    }
    -----------------------------------------------------
    function tribonacci(signature,n) {
        const result = signature.slice(0, n);
        while (result.length < n) {
          result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
        }
        return result;
      }
    --------------------------------------------------------
      function tribonacci(s,n){
        var arr = [];
        for(var i=0; i<n; i++) {
          arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
        }
        return arr;
      }
    ----------------------------------------------------------
    function tribonacci(signature,n){
        while(signature.length < n)
          signature.push(signature.slice(-3).reduce((total, num)=>{return total+num}));
        return signature.slice(0,n);
      }


  */

      
      