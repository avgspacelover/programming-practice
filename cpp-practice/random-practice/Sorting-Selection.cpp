#include <bits/stdc++.h>

 // Check for the element for every traversal with least value and swap it.

  int selectionSort(int arr[], int n){
      for(int i=0; i<n;i++){
          for(int j= i+1;j<n;j++){
              if(arr[j]<arr[i]){                  
                  int temp;
                  temp= arr[i];
                  arr[i]=arr[j];
                  arr[j]=temp;
              }
          }
      }
      for(int i=0;i<n;i++){
          cout<<","<<arr[i];
      }
      cout<<"\n------"<<endl;

      return 0;
  }
  int main(){
      int arr[]= {12,94,23,56,8,51,27,89,67,19,36,84,71};
      int n = sizeof(arr)/sizeof(arr[0]);
      selectionSort(arr,n);
     return 0;
  }