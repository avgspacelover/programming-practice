//inverted pattern
#include <iostream>
using namespace std;

int main()
{  int m,n;
   cout<<"Enter no. of Rows\n";
   cin>>n;
  
   for(int i=n;i>=1;i--){
       int t=1;
       for(int j=1;j<=i;j++){
        cout<<t<<" ";
        t++;
       }     
     cout<<endl;
  } 
   return 0;     
}
