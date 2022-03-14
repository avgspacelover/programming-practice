#include <iostream>
using namespace std;

void printPair(int arr[], int n){

    for(int i=0; i<n;i++){
        int x= arr[i];

        for(int j=i+1;j<n;j++){
            int y= arr[j];

            cout<<x<<", "<<y<<endl;

        }
        cout<<endl;

    }
    
}

int main(){

    int arr[]={1,4,5,6,7,3,9,79,32};
    int n= sizeof(arr)/sizeof(int);

    printPair(arr,n);
    
    
    



    return 0;
}