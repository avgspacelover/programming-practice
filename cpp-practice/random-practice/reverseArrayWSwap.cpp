#include <iostream>
using namespace std;

void reverseArray(int arr[], int n){

    int s=0,e=n-1;

    while(s<e){

        swap(arr[s],arr[e]);
        s+=1;
        e-=1;
    }
    
}

int main(){

    int arr[]={1,4,5,6,7,3,9,79,32};
    int n= sizeof(arr)/sizeof(int);

    reverseArray(arr,n);
    for(int i=0;i<n;i++){
        cout<<arr[i]<<endl;

    }
    
    
    



    return 0;
}