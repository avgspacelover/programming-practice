//inverted half pyramid pattern
#include <iostream>
using namespace std;

int main()
{  int m;
   cout<<"Enter no. of Rows\n";
   cin>>m;
   for(int i=m;i>=1;i--){
     for(int j=1;j<=i;j++){
       cout<<"* ";  
     }
     cout<<endl;
   }   

  return 0;       
}

 
