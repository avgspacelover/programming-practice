// https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript

var uniqueInOrder=function(item){
    let arr=[]
  for(let i=0; i<=item.length;i++){
    if(item[i]!== item[i+1]){
      arr.push(item[i])
    }
    
  }
  return arr;
  }
/*
  var uniqueInOrder=function(iterable){
        return [...iterable].filter((a, i) => a !== iterable[i-1])
    }
*/