//

function chain(input, fs) {
    let value,rem=1;
    
    for (let i=0; i<fs.length; i++){
      if(i==0){
        value= fs[0](input);
        console.log("v",value)
      } else {
        rem=fs[i](value)
        console.log(rem, value)
        value=rem;
      }
      
    }
   return rem
  }


  //-------------------------------------

  function chain(v, fns) {
    return fns.reduce(function(v, fn) { return fn(v) }, v);
  }

  //--------------------------------------
  function chain(x, fns) {
    return fns.reduce(function(x, fn) {
      return fn(x)
    }, x)
  }
  //------------------------------------

  function chain(x, functions) {
    functions = functions || [];
    functions.forEach(function(fn) {
      x = fn(x);
    });
    return x;
  }

  //-----------------------------------------