#include <iostream>
#include <vector>
#include <algorithm> //for sort()
using namespace std;
 
 
 int main(){


     vector <int> v;
     v.push_back(1);
     v.push_back(2);
     v.push_back(3);


     for(int i=0; i<v.size();i++){
         cout<<v[i]<<endl;
     }

     vector<int> ::iterator it;
     for(it=v.begin();it!=v.end();it++){
         cout<<*it<<endl;
     }

     for(auto element:v){
         cout<<element<<endl;
     }

     v.pop_back(); //throws out last element
     vector<int> v2(3,50); //(size, values)

     swap(v,v2);

     sort(v.begin(),v.end());


     return 0;

 }
 
 
