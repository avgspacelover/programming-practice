//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
    let arr=[],r;
    
    const prop=Object.keys(source);//THIS
    
    // Only change code below this line
      
       collection.map((item,index) => {
         r=0;
         Object.keys(item).map((element,i) => {  
           for(let i=0; i<=prop.length;i++){
           if((element == prop[i])&&(item[element]==source[prop[i]])){
               r+=1
               
             }
  
           }        
                        
         })
         if(r==prop.length){     
            arr.push(collection[index])      
         }
  
       })
          console.log("source=",source,"arr=",arr)
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  