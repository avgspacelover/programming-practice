//  https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
function anagrams(word, words) {
    let obj= {}, arr=[]
    word.split("")
    
    for(let i=0; i<word.length; i++){
      if(obj.hasOwnProperty(word[i])){
        obj[word[i]]+=1
      } else obj[word[i]]=1
    }
     
      for(let i=0; i<words.length; i++){
         let str= words[i].split(""), flag;
         
         for(let i=0; i<str.length; i++){
           if(obj.hasOwnProperty(str[i])){
               
               let count=0
               for(elem of str){
                 if(elem==str[i]){ 
                   count++
                   
                 }
               }
             
             if(count== obj[str[i]]){
               
               flag=1;
             }else {flag=0; break;}
           } else {flag=0; break;}
         }
        if (flag){
          
          arr.push(str.join(""))
        }
        
      
       
    }
    return arr;
    
   }

   console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

   console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

   console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))

   /*
   String.prototype.sort = function() {
    return this.split("").sort().join("");
  };
  
  function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
  }
  ------------------------------------
  function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function(v) {return word == v.split('').sort().join('');});
  }
----------------------------------------
let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
----------------------------------------
function anagrams(word, words) {
    return words.filter(function (e) {
        return e.split('').sort().join('') === word.split('').sort().join('');
    })
}

*/