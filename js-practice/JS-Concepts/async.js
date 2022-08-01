
// Add code here
let delays = [200,500,0,350]
const forEach = (arr,cb) => {
  for(let item of arr){
    cb(item, arr.indexOf(item))
  }
  
}

const delayLog = (delayTime, i) => {
  setTimeout( ()=> console.log(`printing element ${i}`), [delayTime])
}

forEach(delays, delayLog)



// IMPORTANT CONCEPT -> https://csx.codesmith.io/units/async/challenge-ajax-simulate

let dataReceived;

function ajaxSimulate(id, callback) {
  const database = ['Aaron', 'Barbara', 'Chris'];
  // Add code here
  
  setTimeout(()=> callback(database[id]), 0)
  
}

// Also add code here
const storeData = (data) => {
  dataReceived = data
	console.log(dataReceived)
  
}
ajaxSimulate(1, storeData)








// Add code here
const runInOrder = async (arrOfFunc, arr)=> {
    let time = 0
    for(let i in arrOfFunc){
      time+= arr[i]
      await setTimeout(() => {arrOfFunc[i]()}, [time])
    }
  }
  /* Uncomment the following lines and click 'run' to test your work */
  
  function sayHi() {
    console.log('hi');
  }
  function sayBye() {
    console.log('bye');
  }
  function sayHowdy() {
    console.log('howdy');
  }
  
  runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);
  
  /*
  should log:
  'hi' (after 200 ms)
  'bye' (100 ms after 'hi')
  'howdy' (300 ms after 'bye')
  */
  
