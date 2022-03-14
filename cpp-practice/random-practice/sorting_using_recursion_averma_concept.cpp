#include <iostream>
#include<vector>
using namespace std;



/*Lets consider a situation where we have sorted elements up to (n-2)th index,then we have given array a[] as 2 3 4 5 1. the last element needs to get inserted in its actual position for complete sorting of given array as 1 2 3 4 5.
So we will create recursive function for sorting and inserting the elements.
In sort function,if number of elements in array will be 0 or 1 then we will return the array. For each recursive call, last element will be inserted to its actual position.*/








void sorting(vector<int>&v)
{
   if(v.size()<=1)
   return;
   int temp=v[v.size()-1];
   v.pop_back();
   sorting(v);
   insertion(v,temp);
}

//insertion function:
void insertion(vector<int>&v,int temp)
{
   if(v.size()==0 || v[v.size()-1]<=temp)
   {
   v.push_back(temp);
   return;
   }
   int x=v[v.size()-1];
   v.pop_back();
   insertion(v,temp);
   v.push_back(x);
   
}

//Code for sorting the array using recursion

void insertion(vector<int>&v,int temp)
{
   if(v.size()==0 || v[v.size()-1]<=temp)
   {
   v.push_back(temp);
   return;
   }
   int x=v[v.size()-1];
   v.pop_back();
   insertion(v,temp);
   v.push_back(x);
}
void sorting(vector<int>&v)
{
   if(v.size()<=1)
   return;
   int temp=v[v.size()-1];
   v.pop_back();
   sorting(v);
   insertion(v,temp);
}
int main()
{
    vector<int>v={5,3,2,4,1};
    sorting(v);
   for(auto it:v)
   cout<<it<<" ";
    return 0;
}