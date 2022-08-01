/*

https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&ab_channel=DaveGray

*/

// ADD CODE HERE

function createFunction(){
    function dummyFunction(){
        return 'hello world'
    }
    
    return dummyFunction;
  }
  
  // Uncomment these to check your work!
  const myFunction = createFunction();
  console.log(myFunction()); //should log: 'hello world'





  function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
      counter++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  // willCounter();
  // willCounter();
  // willCounter();
  
  // jasCounter();
  // willCounter();




  // ADD CODE HERE
const addByX=(x)=> {
    const dummy=(y)=>{
      return x+y
    }
    return dummy
  }
  
  const addByTwo = addByX(2);
  
  // Now call addByTwo with an input of 1 and log the output
  console.log(addByTwo(1))
  // Now call addByTwo with an input of 2 and log the output
  console.log(addByTwo(2))

  


// ADD CODE HERE

const once = (func)=> {
    let hasBeenCalled = false
    let cache;
    const dummy=(...args)=>{
      if(!hasBeenCalled){
        cache = func(...args)
        hasBeenCalled= true
      }
      return cache
    }
    
    return dummy
  }
  const addByTwoOnce = once(function(num) {
    return num + 2;
  });
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  console.log(addByTwoOnce(5));  //should log 7
  console.log(addByTwoOnce(10));  //should log 7
  console.log(addByTwoOnce(9001));  //should log 7




  // ADD CODE HERE
const after = (num, cb)=> {
    let ct= 0
    const call = (...args)=> {
      ct++  
      if(ct>=num){
              return cb(...args)	
            }
    }
    
    return call
  
  }
  const called = function(string) { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  // UNCOMMENT THESE LINES TO TEST YOUR WORK
  console.log(afterCalled('world')); // -> undefined is printed 
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed


  // ADD CODE HERE
const delay = (cb, wait) => {

    function waitPls(){
 
         return setTimeout(cb, [wait])    
   }
   
   return waitPls
 }
 // UNCOMMENT THE CODE BELOW TO TEST DELAY
 let count = 0;
  const delayedFunc = delay(() => count++, 1000);
  delayedFunc();
 console.log(count); 												 // should print '0'
 setTimeout(() => console.log(count), 1000); // should print '1' after 1 second





 // ADD CODE HERE
const saveOutput = (func, pass)=> {
    const passedPass= {}
    const password = (input)=> {
      if(input != pass){
  
        passedPass[input]= func(input)
        return func(input)
      } else if(input == pass){
        return passedPass
      }
    }
    return password
  }
  // Uncomment these to check your work!
 const multiplyBy2 = function(num) { return num * 2; };
 const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
 console.log(multBy2AndLog(2)); // should log: 4
 console.log(multBy2AndLog(9)); // should log: 18
 console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }


 // ADD CODE HERE

const cycleIterator = (arr) => {
    let ct = 0
    const first = ()=> {
      if(ct==arr.length) ct= 0
      return arr[ct++]
    }
    
    return first
  }
  
  // Uncomment these to check your work!
  // const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  // const getDay = cycleIterator(threeDayWeekend);
  // console.log(getDay()); // should log: 'Fri'
  // console.log(getDay()); // should log: 'Sat'
  // console.log(getDay()); // should log: 'Sun'
  // console.log(getDay()); // should log: 'Fri'




  // ADD CODE HERE

const defineFirstArg = (func, art)=> {
    const passed = (...args)=> {
      return func(art,...args)
    }
    
    return passed
  }
  // Uncomment these to check your work!
   const subtract = function(big, small) { return big - small; };
  const subFrom20 = defineFirstArg(subtract, 20);
  console.log(subFrom20(5)); // should log: 15







  function hobbyTracker(hobbies) {
  
	let cache = {}
  
  function abstract(){
    for(let hob of hobbies){
    		cache[hob]= 0
  	}
  }
  abstract()

  
  const update=(hobby, hrs)=> {
    
    if(hobby==undefined){
      cache= {}
      abstract()
      return 'tracker has been reset!'
    }
    
    cache[hobby]+= hrs
    
    return cache
  }
  return update
}




// Uncomment the code below to check your code:
 const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}




// ADD CODE HERE

const dateStamp = (func )=> {
    let obj={}
    const next = (...args)=> {
      let tareek = new Date()
      let str= tareek.toDateString();
      obj['date']= str
      obj['output']= func(...args)
      
      return obj;
    }
    
    
    return  next
    
  }
  // Uncomment these to check your work!
  const stampedMultBy2 = dateStamp(n => n * 2);
  console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
  console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }



  // ADD CODE HERE

const censor = ()=> {
    let cache= {}
    const next = (str1, str2)=> {
      if(str2){
        cache[str1]= str2
        return
      }
      
      Object.keys(cache).forEach(key=> {
        str1 = str1.replace(key, cache[key])
      })
      
      return str1
    }
    
    
    return next
  }
  
  
  // Uncomment these to check your work!
   const changeScene = censor();
  changeScene('dogs', 'cats');
  changeScene('quick', 'slow');
  console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'