//reverse_a_number
#include <iostream>
using namespace std;
int main()
{  int n;
   cout<<"Enter Number\n";
   cin>>n;  
   int rev=0,r,t,k,c=0;

   r=n;
   while(r!=0){      
      t=r%10;
      rev=(rev*10)+t;
      r/=10;
   }     
    cout<<rev;
   return 0;     
}
