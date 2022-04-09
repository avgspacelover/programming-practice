//  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris

function orbitalPeriod(arr) {
    for(let i=0;i<arr.length;i++){
  
      
        if(arr[i].hasOwnProperty("avgAlt")){
          arr[i]["orbitalPeriod"] =avaltToOrb(arr[i]["avgAlt"])
          delete arr[i]["avgAlt"]
        }
      
  
    }
    console.log(arr)
    return arr;
  }
  
  
  
  function avaltToOrb(av){
    const GM = 398600.4418;
    const r = 6367.4447+ av;
  
    return Math.round( 2*Math.PI*Math.sqrt(Math.pow(r,3)/GM))
  }
  
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);