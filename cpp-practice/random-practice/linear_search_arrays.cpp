//linear_search_arrays
#include <iostream>
using namespace std;
int linsearch(int arr[], int n, int key){
    for(int i=0;i<n;i++){
        if(arr[i]==key){
            return i;
        }
    } return -1;
}
    
int main(){
    int *k,t,j;
    cout<<"Enter array size:"<<endl;
        
    cin>>t;
    k= new int [t];
    cout<<"enter elements\n";5
    
     for(int i=0; i<t;i++){
        cin>>k[i];
     }
     cout<<"Enter term to search for"<<endl;
     cin>>j;
    cout<<linsearch(k, t, j)<<endl;
}