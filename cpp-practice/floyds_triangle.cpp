//Floyd's triangle
#include <iostream>
using namespace std;

int main()
{  int m;
   cout<<"Enter no. of Rows\n";
   cin>>m;
    int t=1;
   for(int i=0;i<=m;i++){
      
     for(int j=1;j<=i;j++){
           
           cout<<t++<<" ";      

              
     }
     cout<<endl;
   }     
   return 0;     
}
