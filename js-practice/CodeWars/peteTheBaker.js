// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript


function cakes(recipe, available) {
    let min = Number.MAX_SAFE_INTEGER;
    let flag = 1
    
    Object.keys(recipe).forEach(ingre => {
      
      if(recipe[ingre] && !available[ingre]) flag = 0
      
      let possible = Math.floor(available[ingre]/ recipe[ingre])
      console.log("possible", possible, "min", min)
       min = Math.min(possible, min)
    })
    
    if(flag) {
      return min
    }else return 0
  }