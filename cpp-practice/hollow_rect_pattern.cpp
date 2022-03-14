//hollow rectangle pattern
#include <iostream>
using namespace std;

int main()
{  int m,n;
   cout<<"Enter no. of Rows\n";
   cin>>m;
   cout<<"Enter no. of Columns\n";
   cin>>n;
   for(int i=0;i<=m;i++){
       for(int j=0;j<=n;j++){
          if(i==0||i==m){
            cout<<"* ";   
          }
          else{          
            if(j==0||j==n){
               cout<<"* ";
            }   else{
                 cout<<"  ";              
               }
         }       
       }   
       cout<<endl;         
   }
return 0;
 
}