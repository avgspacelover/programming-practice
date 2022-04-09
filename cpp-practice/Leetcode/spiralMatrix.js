//

//#include <bits/stdc++.h>

var spiralOrder = function(array) {
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
};