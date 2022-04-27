// 


function digitize(n) {
    return n.toString().split('').reverse().map(item=> parseInt(item))
  }



  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }


  function digitize(n){
    return (n + '').split('').map(Number).reverse();
  }


  function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

  function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }

  function digitize(n) {
    return (n+'').split('').reverse().map(n => +n);
  }