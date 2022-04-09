// https://leetcode.com/problems/maximum-subarray/

#include <bits/stdc++.h>
#include <vector>

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        int currentSum=0, maxSum= INT_MIN;
        
        for( auto i: nums){
            
            currentSum= currentSum+ i;
            
            maxSum = max(maxSum, currentSum);
            
            if(currentSum <0){
                currentSum =0;
            }   
        }

        return maxSum;
    }
};