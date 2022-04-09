// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript



  function countSheeps(arrayOfSheeps) {
      
    let count=0
      arrayOfSheeps.map((item) => { if(item){count++} } )
      return count;

    
  }

/*
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
  --------------------------------
  
*/