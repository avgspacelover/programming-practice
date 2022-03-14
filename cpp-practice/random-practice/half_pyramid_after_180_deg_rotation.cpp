//half pyramid after 180 deg rotation pattern
#include <iostream>
using namespace std;

int main()
{  int m;
   cout<<"Enter no. of Rows\n";
   cin>>m;
   for(int i=1;i<=m;i++){
     for(int j=1;j<=m;j++){
       if(j<=(m-i)){
           cout<<" ";
       }
           else {
               cout<<"* ";
           } 
               
     }
     cout<<endl;
   }     
   return 0;     
}
