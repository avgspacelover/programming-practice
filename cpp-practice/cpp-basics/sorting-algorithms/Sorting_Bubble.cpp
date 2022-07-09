#include<bits/stdc++.h>

 // Repeatedly swap two adjacent elements if they are in wrong order

   int bubbleSort(int arr[], int n){
       int t=1;
       while(t<n){
           
           for(int i=0; i<n-t;i++){
           if(arr[i+1]<arr[i]){
               int temp;
               temp= arr[i];
               arr[i]=arr[i+1];
               arr[i+1]=temp;
           }
       }
           t++;
       }
       
       cout<<endl;
       for(int i=0;i<n;i++){
           cout<<" "<<arr[i];
       }
       cout<<endl;
       return 0;



   }

   int main(){
      int arr[]= {12,94,23,56,8,51,27,89,67,19,36,84,71};
      int n = sizeof(arr)/sizeof(arr[0]);
      bubbleSort(arr,n);
     return 0;
  }