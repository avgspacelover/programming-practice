//armstrong_number_check
#include <iostream>
#include<math.h>
using namespace std;
int main()
{  int n,r,t;
   cout<<"Enter Number\n";
   cin>>n;  
   int c=0;
   r=n;
   while(r>0){      
      t=r%10;
      cout<<pow(t,3)<<endl;
      c+=(pow(t,3));
      cout<<c<<endl;
      r/=10;
      
   }    
   if(c==n){
       cout<<"The number is an armstrong number\n";
   } else{
      cout<<"The number is not an armstrong number\n";
   }

    
   return 0;     
}
