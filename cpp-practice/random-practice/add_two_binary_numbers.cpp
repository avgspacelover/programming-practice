//add 2 binary numbers
#include <bits\stdc++.h>
using namespace std;
void add_2_binary_num(int n, int m){
 int a=0 pc=0;
 while(n>0 && m>0){
   
   if(n%2==0 && m%2==0){
       a=a*10 +pc;
       pc=0;
   } elseif((n%2 ==0 && m%2==1)|| (n%2==1 && m%2==0)){
       if(pc==1){
           a=a*10+ 0;
           pc=1;
       } else{
           a=a*10 +1;
           pc=0;
       }
   } else{
       a=a*10 +pc;
       pc=1
   }
   a/=10;
   b/=10;
 
 } 
    while(a>0){
        if(pc==1){
            if(a%2==1)
            a= a*10 +0;
            pc=1;
        } else {
            a=a*10+1;
            pc=0
        }
        while(a>0){
            if(pc==1){
                if(a%2==1){
                    a= a*10
                }
            }
        }
    }

}
 