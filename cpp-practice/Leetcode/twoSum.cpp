#include <bits/stdc++.h>

// @grind75 
// https://leetcode.com/problems/two-sum/

// T.C: O(n) S.C: O(n)
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> answer;
        std::unordered_map<int,int> hashMap;
        for(int i=0; i< nums.size(); i++){
            
            if(hashMap.count(target- nums[i])){
                answer.push_back(hashMap[target-nums[i]]);
                answer.push_back(i);
                
            } else{
                
                hashMap[nums[i]]= i;
                
            }
        }
        
        return answer;
        
    }
};

//Second Approach

//Ist Approach
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<pair<int,int>> v;
        for(int i=0;i<nums.size();i++)
            v.push_back({nums[i],i});
        sort(v.begin(),v.end());
        int i=0;
        int j=v.size()-1;
        int idx1=0;
        int idx2=0;
        while(i<j)
        {
            if(v[i].first+v[j].first==target)
            {
                idx1=v[i].second;
                idx2=v[j].second;
                break;
                
            }
            if(v[i].first+v[j].first<target)
                i++;
            if(v[i].first+v[j].first>target)
                j--;
    }
        return {idx1,idx2};
    }
//T.C :O(nlogn)
//S.C :O(n)

//Third Approach
vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> index;
        int size=nums.size();
        for(int i=0;i<size;i++)
        {
            int k=target-nums[i];
            for(int j=i+1;j<size;j++)
            {
                if(nums[j]==k)
                {
                    index.push_back(i);
                    index.push_back(j);
                    break;
                }
            }
            if(index.size()==2)
                break;
        }
        return index;
    }
	//Time Complexity: O(n^2)