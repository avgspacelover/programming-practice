//zig-zag pattern
#include <iostream>
using namespace std;

int main()
{  int n;
   cout<<"Enter no. of Columns\n";
   cin>>n;  
   for(int i=1;i<=3;i++){      

       for(int j=1;j<=n;j++){
           if((j+i)%4==0){
               cout<<"*";
           } else if((i==2)&&((j+i)%4==2)){
               cout<<"*";
           } else{
               cout<<" ";
           }

                                
        }
     cout<<endl;
   } 
   

   return 0;     
}
