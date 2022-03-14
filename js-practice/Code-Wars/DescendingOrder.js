//  https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){
    let arr=[],digit=""
    if(n==0){return 0}
    while(n){
      console.log(n)
      arr.push(n%10);
      n= Math.floor(n/10)
      
    }
    
    let newArr= arr.sort().reverse()
    console.log("new",newArr)
    newArr.map((item)=> digit+=item)
    return parseInt(digit);
    
  }
  /*
    Alternatives

    function descendingOrder(n){
        return parseInt(String(n).split('').sort().reverse().join(''))
    }
    ------------------------------------
    function descendingOrder(n){
        return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
    }
  */