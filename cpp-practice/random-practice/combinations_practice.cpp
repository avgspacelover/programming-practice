//combinations__practice
#include <iostream>
#include <cmath>
using namespace std;
 

  float facto(float h){
      float fct=1;
      for(int i=1;i<=h;i++){
       fct*=i;  
      }
      return fct;
  }
 
int main(){
 float n,r;
 cout<<"Enter n & r"<<endl;
 cin>>n>>r;
 float ncr;
 ncr=(facto(n)/(facto(n-r)*facto(r)));
 cout<<ncr;
      return 0;
  }