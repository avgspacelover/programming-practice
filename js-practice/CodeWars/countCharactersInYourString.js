// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (str) {  
    let obj = {}
  
      str
        .split("")
        .map(item => {
          if(!obj.hasOwnProperty(item)){
            obj[item]= 1;
          } else {
            obj[item]++;
          }
      })
    
    
    
    
    
    return obj;
  }
  //-------------------------

  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

  //------------------------

  function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
    },{});
  }

  //------------------------

  const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});

  
  //----------------

  const count = require('lodash').countBy;
