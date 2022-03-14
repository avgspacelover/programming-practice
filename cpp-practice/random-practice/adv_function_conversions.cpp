//advfunction binary,decimal,hexadecimal conversions
#include <bits/stdc++.h>

using namespace std;

int bintodeci(int r){
    int i=0,k=0,d;
    while (r>0){
      d=r%10;
      k+=d*pow(2,i);
      i++;
      r/=10;
    }
    return k;
}

int octtodeci(int r){
    int i=0,k=0,d;
    while (r>0){
      d=r%10;
      k+=d*pow(8,i);
      i++;
      r/=10;
    }
    return k;
}

int hexadecitodeci(string r){
    int k=0,d=1,m;
    m=r.size();
    for(int i=m-1;i>=0;i--){
      if(r[i]>='0' && r[i]<='9'){
        k+= d*(r[i]-'0');
      } else if(r[i]>='A' && r[i]<='F'){
        k+= d*(r[i]- 'A' + 10);
      }
      k*=16;
    }
    return k;
}

void decitobin(int n){
  int k=0; 
  int r[50];
  while(n>0){
   r[k]=n%2;  
   n/=2;
   k++;
  }
  
  for(int i=k-1;i>=0;i--){
    cout<<r[i];
  }
  
}
void decitoocta(int n){
  int k=0; 
  int r[50];
  while(n>0){
   r[k]=n%8;  
   n/=8;
   k++;
  }
  
  for(int i=k-1;i>=0;i--){
    cout<<r[i];
  }
  
}
void decitohexadeci(int n){
  int k=0; 
  int r[50];
  while(n>0){
   r[k]=n%16;  
   n/=16;
   k++;
  }
  
  for(int i=k-1;i>=0;i--){
    cout<<r[i];
  }
  
}


int main(){
  int n,j,h,k,g,f,l,q,m;
  
  char o[50];
  cout<<"enter Binary number to convert to decimal"<<endl;
  cin>>n;
  j=bintodeci(n);
  cout<<j<<endl;
  cout<<"enter octal number to convert to deci"<<endl;
  cin>>k;
  h=octtodeci(k);
  cout<<h<<endl;
  cout<<"convert hexadecimal number to decimal number"<<endl;
  cin>>o;
  l=hexadecitodeci(o);
  cout<<l<<endl;
  cout<<"convert decimal number to binary number"<<endl;
  cin>>f;
  decitobin(f);
  cout<<"\nconvert decimal number to octal number"<<endl;
  cin>>m;
  decitoocta(m);
  cout<<"\nconvert decimal number to Hexadecimal number"<<endl;
  cin>>q;
  decitoocta(q);
  cout<<endl;
return 0;
}