//check_prime_number
#include <iostream>
#include <cmath>
using namespace std;
int main()
{  int n;
   cout<<"Enter Number\n";
   cin>>n;  
   int t=1;
   for(int i=2;i<sqrt(n);i++){      
      if(n%i==0){
          cout<<"The number is composite & is divisible by "<<i<<endl;
           t=2;          
      }                          
     } 
   if(t==1){
       cout<<" It's a PRIME number!\n";
   }     

   return 0;     
}
