// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
    if(walk.length==10){
       let direct ={"vert":0,"hor":0}
    
    
     for (const step of walk) {
         if(step=="n"){
           direct["vert"]++
         }else if(step== "e"){
           direct["hor"]++
         } if(step=="s"){
           direct["vert"]--
         }else if(step== "w"){
           direct["hor"]--
         }
     }
   
    if(direct["vert"]==0 && direct["hor"]==0){
      return true;
    } else return false;
     
      
    } else return false
  }
  /*
  -------------------------------
  function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }
  --------------------------------
  function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }
  -------------------------------
  function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
  }
  --------------------------------
  function isValidWalk(walk) {
    return walk.filter(function(dir, i, arr) {return dir != arr[i+1];}).length === 10;
  }
  */