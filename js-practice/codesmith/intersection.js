// https://csx.codesmith.io/units/callbacks/challenge-intersection


// ADD CODE HERE
const intersection = (arr)=> {
    let acc= arr.pop()
    while(arr.length){
      let curr= arr.pop()
        let newArr= []
      
      curr.forEach(elem => {
        if(acc.includes(elem)) newArr.push(elem)
      })
      
      acc= newArr;
    }
    
    return acc;
  }
  // Uncomment these to check your work!
  const arr1 = [5, 10, 15, 20];
  const arr2 = [15, 88, 1, 5, 7];
  const arr3 = [1, 10, 15, 5, 20];
  console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]