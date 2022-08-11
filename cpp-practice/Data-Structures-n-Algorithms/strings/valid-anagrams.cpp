// https://leetcode.com/problems/valid-anagram/


#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        
        unordered_map<char, int> hash;
        
        for(int i =0; i< s.size(); i++){
            if(hash.find(s[i]) != hash.end()){
                hash[s[i]] = hash[s[i]] +1;
            }else {
                hash[s[i]]= 1;
            }
        }
        
        
        
        for(int i =0; i< t.size(); i++){
            if(hash[t[i]]==0 or hash.find(t[i]) == hash.end()){ 
                return false;
            }else {
                hash[t[i]] = hash[t[i]] -1;      
            }
        }
        
        for(auto i: hash){
            if(i.second >=1) return false;
        }
        
        return true;
         
        
    }
};