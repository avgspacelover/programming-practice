/*
https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]



NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

*/

snail = function(array) {

    let top=0,left=0, right=array[0].length-1, down=array.length-1, dir=0

    let arr=[]

    if(array.length==0 ||array[0]==0){ return arr}
    while( top<=down && left<=right){
      if(dir==0){
        for(let i=left;i<=right;i++){
          arr.push(array[top][i]);
          
          
          
        }
        top+=1
      }
      
      if(dir==1){
        for(let i=top;i<=down;i++){
          arr.push(array[i][right])
          
          
        }
        right-=1
      }
      
      if(dir==2){
        for(let i=right;i>=left;i--){
          arr.push(array[down][i])
          
          
        }
        down-=1
      }
      
      if(dir==3){
        for(let i=down; i>=top;i--){
          arr.push(array[i][left])
          
          
        }
        left+=1
      }
      
      dir=(dir+1)%4
      
    }

  return arr;
}

/*
ALTERNATIVES

snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
---------------------------
snail = function(array) {
  var size = array.length;
  
  if (size == 0)
    return [];

  if (size == 1)
    return array[0];
  
  var top    = array[0].slice(0, -1);
  var right  = array.slice(0, -1).map(a => a[size - 1]);
  var bottom = array[size -1].slice(1).reverse();
  var left   = array.slice(1).map(a => a[0]).reverse();
  var inner  = array.slice(1, -1).map(a => a.slice(1, -1));

  return [].concat(top, right, bottom, left, snail(inner));
}
----------------------------
const snail = function(array) {
  const list = [];

  while(array.length) {
    list.push(...array.shift(), ...array.map(row => row.pop()));
    
     array.reverse().map(row => row.reverse());
  }

  return list;
}
-------------------------------
const rotate = arr => arr.length ? arr[0].map((_, i) => arr.map((_, j) => arr[j][i])) : [];
const snail = arr => arr.length ? [...arr[0], ...snail(rotate(arr.slice(1)).reverse())] : [];

*/