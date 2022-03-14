#include <bits/stdc++.h>
   
   int returnKey(int arr[],int key,int n){    
       for(int i=0;i<n;i++){
          if(arr[i]== key){
               return i+1;
           } 
       } 
       return -1;
   }
   int main(){
       int arr[]= {12,92,34,83,86,20,11,34};
       int k = 11;
       int key;
         
       key =returnKey(arr,k,7);
       if(key){
        cout<<"The position of element is "<<key<<"."<<endl;

       } else{
           cout<<"ELEMENT NOT PRESENT";
       }
        
        return 0;
   }