//Insertion_sort
#include <iostream>
using namespace std;
int insertion_sort (int k[], int n){
     int t,ct=1;
         
           for(int i=1;i<n;i++){
            int current=k[i];
            int j=i-1;
               while(k[j]>current && j>=0){
                 k[j+1]=k[j];
                 j--;
               }
               k[j+1]=current;
          }
     
               for(int i=0;i<n;i++){
                 cout<<k[i]<<" ";
             }cout<<endl;    
      return 0;
 }
    

int main(){
    int l; 
    int *r;
    cout<<"Enter the array size"<<endl;
    cin>>l;
    r= new int [l];
     cout<<"Enter elements"<<endl;
     for(int i=0;i<l;i++){
        cin>>r[i];
     }
   insertion_sort(r,l);
    return 0;

}