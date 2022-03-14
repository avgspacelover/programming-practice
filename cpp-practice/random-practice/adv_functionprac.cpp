//functions_adv_practice
#include <iostream>
#include <cmath>
using namespace std;

int sumnum(int k){
    int s;
    s= ((k*(k+1))/2);
   return s;
}

int sumk( int k){
    int p;
    int ct=0;
    for(int i=0;i<=k;i++){
     ct=ct+i; 
    }
    return ct;
}



bool pythotriplet(int x,int y,int z){
 int g= max(x, max(y,z));
 int f,h;
 if(g==x){
     f=y;
     h=z;
 } else if(g==y){
     f==x;
     h==z;
 } else{
     f=x;
     h=y;
 }
 if(g*g== (f*f + h*h)){
   return true;
 } else{
     return false;
 }
   
}

int main(){
    int n,q,l,a,b,c;
    cout<<"Enter the sum of N numbers to be found\n";
    cin>>n;
    q=sumnum(n);
    l=sumk(n);
    cout<<"SUM= "<<q<<endl;
    cout<<"SUM= "<<q<<endl;
    cout<<"Enter the numbers to check fo pythogorean triplets\n";
    cin>>a>>b>>c;
    if(pythotriplet(a,b,c)){
        cout<<"The numbers are a pythogorean triplet"<<endl;
    } else{
        cout<<"No its not a triplet"<<endl;
    }

    return 0;
}