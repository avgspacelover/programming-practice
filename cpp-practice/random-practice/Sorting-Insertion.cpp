#include <bits/stdc++.h>

  // Insert an element from unsorted array to its correct position.


  int insertionSort(int arr[], int n){

    int i,j,k;
    for(i = 1; i<n;i++){

      j=i-1;
      k= arr[i];

      while(arr[j]>k && j>=0){

        arr[j+1]=arr[j];
        j--;

      }

      arr[j+1]=k;

    }

    for(int i=0;i<n;i++){
      cout<<arr[i]<<" ";
    }
    cout<<"\n------"<<endl;

    return 0;
      
  }

  int main(){
    int arr[]= {12,94,23,56,8,51,27,89,67,19,36,84,71};
    int n = sizeof(arr)/sizeof(arr[0]);
    insertionSort(arr,n);
    return 0;
  }