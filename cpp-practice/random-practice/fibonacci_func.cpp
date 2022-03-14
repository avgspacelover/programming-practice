//functions__practice
#include <iostream>
#include <cmath>
using namespace std;
 
 void fibo(int n){
     int t=0;
     int m=1;
     int nt;
     for(int i=1;i<=n;i++){
        cout<<t<<", ";
         nt=t+m;
         t=m;
         m=nt;
     }
     return;
 }
  int facto(int h){
      int fct=1;
      for(int i=1;i<=h;i++){
       fct*=i;  
      }
      return fct;
  }
 
int main(){
 int k;
 cout<<"enter no. of terms in the fibonacci sequence\n";
 cin>>k;
  fibo(k);
  int j= facto(k);
  cout<<"\nThe factorial of "<<k<<" is "<<j<<endl;
 
      return 0;
  }