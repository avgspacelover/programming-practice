#include <bits/stdc++.h>

// @grind75

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
        int maxProfit =0;
        int minimum= INT_MAX;
        
        for(int i=0; i< prices.size() ; i++){
            minimum= min(minimum, prices[i]);
            
            maxProfit= max(maxProfit, prices[i]- minimum);
        }
        
        return maxProfit;
        
    }
};