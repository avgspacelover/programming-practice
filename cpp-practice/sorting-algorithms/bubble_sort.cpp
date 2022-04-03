//bubble_sort
#include <iostream>
using namespace std;

int bubble_sort (int k[], int n){
     int t,ct=1;
     while(ct<n){
           for(int i=0;i<n-ct;i++)
             if(k[i]>=k[i+1]){
               t=k[i];
               k[i]=k[i+1];
               k[i+1]=t;
             }
             ct++;
         }
               for(int i=0;i<n;i++){
                 cout<<k[i]<<" ";
             }cout<<endl;    
      return 0;
     }
    
 

int main(){
    int *r,l; 
    
    cout<<"Enter the array size"<<endl;
    cin>>l;
    r= new int [l];
     cout<<"Enter elements"<<endl;
     for(int i=0;i<l;i++){
        cin>>r[i];
     }
   bubble_sort(r,l);
    return 0;

}