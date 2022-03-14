//max_till_i_problem
#include<iostream>

using namespace std;

int main(){
    int *r, l;
  
    cout<<"Enter array size"<<endl;
    cin>>l;
    r= new int [l];
    cout<<"Enter array"<<endl;
    

    for(int j=0;j<l;j++){
        cin>>r[j];
    }
    int max=0;
    for(int j=0;j<l;j++){
      int ct=0;
      int k=j;
      while(ct<=k){
          if(r[ct]>max)
          max=r[ct];
          cout<<max<<" "<<endl; 
          ct++;
      }
    } 

 return 0;
}