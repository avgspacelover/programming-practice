
/*
 Split Arrays recursively.
 Merge 2 sorted Arrays. -> base case
 then call back merge.
*/




#include<bits/stdc++.h>

  void merge(int arr[], int l, int mid, int r){

      int m=mid-l+1;
      int n=r-mid;

      int a[m], b[n];

      for(int i=0;i<m;i++){
          a[i]=arr[l+i];
      }
      for(int j=0;j<n;j++){
          b[j]=arr[mid+1+j];
      }
      int i=0,j=0,k=l;
      while(i<m && j<n){

          if(a[i]<b[j]){
              arr[k]=a[i];
              i++;
          } else{
              arr[k]=b[j];
              j++;

          }
          k++;

      }

      while(i<m){
          arr[k]=a[i];
          i++;
          k++;
      }

      while(j<n){
          arr[k]=b[j];
          j++;
          k++;
      }



  }

  void mergeSort(int arr[], int l, int r){

      if(l<r){

          int mid=(l+r)/2;
          mergeSort(arr,l,mid);
          mergeSort(arr,mid+1,r);
          merge(arr,l,mid,r);
      }
  }






  int main(){

    
      int arr[]= {12,94,23,56,8,51,27,89,67,19,36,84,71};
      int n = sizeof(arr)/sizeof(arr[0]);
      mergeSort(arr,0,n-1);
      cout<<endl;
      for(int i=0;i<n;i++){
          cout<<arr[i]<<" ";
      }
      cout<<endl;



      return 0;
  }