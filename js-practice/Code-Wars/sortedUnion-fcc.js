// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(...arr) {
    let newArr=[]
    arr.map((item) =>{
      item.map((element) => {
        if(!newArr.includes(element)){
          newArr.push(element)
        }
  
      })
    })
    console.log(newArr)
    return arr;
  }
  
  /*
  ALTERNATIVE
  function uniteUnique(...arrays) {
    const allNums = [];
    arrays.forEach((array) => allNums.push(...array));
    return Array.from(new Set(allNums));
}
*/