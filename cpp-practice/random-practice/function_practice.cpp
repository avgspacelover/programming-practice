//functions__practice
#include <iostream>
#include <cmath>
using namespace std;

 bool isprime(int l){
       for(int i=2;i<=sqrt(l);i++){
          if(l%i==0){
              return false;
             } 
          } return true; 
       }
 
int main(){
 int k,m;
 cout<<"enter number\n";
 cin>>k;
 cout<<"Enter 2nd number\n";
 cin>>m;
 cout<<"The prime numbers b/w them are-\n";
 
  for(int i=k;i<=m;i++){
      if(isprime(i)){
          cout<<i<<endl;
      }
  }





return 0; 
}