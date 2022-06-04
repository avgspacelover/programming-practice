#include <bits/stdc++.h>

// grind75
// https://leetcode.com/problems/valid-palindrome/

class Solution {
public:
    bool isPalindrome(string s) {
            
        vector<char> v;
        int i=0;
        int r= s.size();
        if(r==0)return true;
            
        while(i<r){
            
            
            if((s[i]>='A' && s[i]<='Z') || (s[i]>='a' && s[i]<='z') || (s[i]>='0' && s[i]<='9')){
               v.push_back(std::tolower(s[i])); 
            }
            i++;
        }
        
        int l=0;
        r= v.size();
        
        while(l<r){
            if(v[l]!=v[r-1]){
                return false;
            }
            
            ++l;
            --r;
        }
        
        return true;
            

        
    }
};

