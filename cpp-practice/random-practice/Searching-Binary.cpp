#include <bits/stdc++.h>

  int binaryReturn(int arr[],int n, int key){
      
      int strt = 0, end=n;
      
      /*
      1- key >mid => set strt =mid+1 || key<mid set end =mid-1
      2- (s+e)/2 gets the floor of it

      */

     while(strt<= end){
         int mid =(strt + end)/2;
          cout<<mid<<endl;

         if(key> arr[mid]){
             strt =mid+1;
         } else if(key<arr[mid]){
             end = mid-1;
         } else if(key == arr[mid]){
             return mid;
         } 
     }

     return -1;

  }
  

  int main(){

      int arr[]={10,20,30,40,50,60,70,80,90};
      int arr2[]={10,20,30,40,50,60,70,80};
      int n= sizeof(arr)/sizeof(arr[0]);

      int k= 21;

      int res = binaryReturn(arr2,n,k);
      if(res>=0){
          cout<<"The position of element is "<<res+1<<"."<<endl;
          

      } else{
          cout<<"ELEMENT DOESN'T EXIST";
      }

      return 0;
  }