#include <iostream>

using namespace std;
//function to print all subarrays


int printSubArray(int n, int arr[]){

    for(int i=0; i<n;i++){

        for(int j=i; j<n; j++){

            for(int k=i; k<=j; k++){

                cout<<arr[k]<<" ";
            }
            cout<<endl;
        }

    }

    return 0;
}

// brute force O(n^3)

int SubArraySum(int n, int arr[]){
    int maxSum=0;

    for(int i=0; i<n;i++){

        for(int j=i; j<n; j++){
            int subarraysum =0;
            for(int k=i; k<=j; k++){

                subarraysum+=arr[k];

            }
            maxSum = max(maxSum, subarraysum);
        }

    }

    return maxSum;
}


//prefix Sum Approach O(n^2)


int prefixSum(int n, int arr[]){
    int subarraysum =0, maxSum=0;
    int prefix[100]={0};
    prefix[0] = arr[0];
    for(int i=1; i<n; i++){
        prefix[i]= prefix[i-1] + arr[i];
    }
    
    for(int i=0; i<n;i++){

        for(int j=i; j<n; j++){


            subarraysum= i>0? prefix[j]- prefix[i-1] : prefix[j];  

            maxSum= max(maxSum,subarraysum);

        }

    }

    return maxSum;
}

// Kadan'e algorithm, O(N) time

int kadaneSum(int n , int arr[]){

    int currentSum = 0, maxSum=0;

    for(int i=0; i<n ; i++){

        currentSum= currentSum + arr[i];

          
        maxSum= max(maxSum, currentSum);
        
        if(currentSum<0){
            currentSum=0;
        }
      
    }

    return maxSum;

}

int main(){

    int arr[] = {-2,3,4,-1,5,-12,6,1,3};

    int n = sizeof(arr)/sizeof(int);

    cout<<"The subarrays are: "<<printSubArray(n, arr)<< endl;

    cout<<"The maximum subarray is: "<<SubArraySum(n,arr)<<endl;

    cout<<"The maximum (prefix approach)subarray is: "<< prefixSum(n,arr)<<endl;

    cout<<"The maximum (kadane's approach)subarray is: "<< kadaneSum(n,arr)<<endl;


    return 0;

}