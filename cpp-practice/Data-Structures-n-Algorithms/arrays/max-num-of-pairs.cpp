https://leetcode.com/contest/weekly-contest-302/problems/maximum-number-of-pairs-in-array/



class Solution {
public:
    vector<int> numberOfPairs(vector<int>& nums) {
        unordered_map<int,int>mp;
        int fe=0,se=0;
        for(auto n:nums) 
        {
            mp[n]++;
        }
        for(auto it:mp)
        {
            fe+=(it.second/2);
            se+=(it.second%2);
        }
        return {fe,se}; 
        
    }
};
