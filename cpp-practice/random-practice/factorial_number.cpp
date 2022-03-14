//Factorial_of_a_number
#include <iostream>

using namespace std;
int main()
{  float n,m;
   float r=1;
   float t=1;   
   cout<<"Enter Number\n";
   cin>>n; 
   cout<<"Enter 2nd Number\n";
   cin>>m; 
   for(float i=2;i<=n;i++){
      r=r*i;
   }
   cout<<"The factorial of "<<n<<" is "<<r<<endl;    
       for(float i=2;i<=m;i++){
        t=t*i;
   }
   cout<<"The factorial of "<<m<<" is "<<t<<endl;   
   return 0;     
}
