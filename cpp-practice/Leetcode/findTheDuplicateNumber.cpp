// https://leetcode.com/problems/find-the-duplicate-number/

#include <bits/stdc++.h>

using namespace std;

//brute force

class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        
        sort(nums.begin(), nums.end());
        for(int i=0; i<nums.size();i++){
            
            if(nums[i]==nums[i+1]){
                return nums[i];
            }
        }
         return 0;            
        }
    
};

//binary search method





class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int strt=1, end= nums.size()-1,count;
        
        while(strt <=end){
            
            int mid= (strt + end)/2;
            count=0;
            for(int item: nums){
                if(item<=mid){
                    ++count;
                }
            }
            
            if(count<= mid){

                strt= mid+1;
                
            } else{
                
                end= mid-1;
                
            }
            
            
        }
        
        return strt;
        
    }
};