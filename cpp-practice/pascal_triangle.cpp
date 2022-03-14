//pascal's_triangle
#include <iostream>
#include <cmath>
using namespace std;

float fact(float k){
   float fct=1;
    for(float i=2;i<=k;i++){
     fct*=i;
    }
    return fct;
}
 
int main(){
 float k;
 cout<<"enter number of rows\n";
 cin>>k;
 
  for(float i=0;i<=k;i++){
      for(float j=0; j<=i;j++){
         cout<<fact(i)/(fact(j)*fact(i-j))<<" ";
      }
      cout<<endl;
  }
      return 0;
     
  }