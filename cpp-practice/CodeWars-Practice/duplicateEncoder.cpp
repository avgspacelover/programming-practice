// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/cpp

#include <bits/stdc++.h>
#include <unordered_map>

using namespace std;

std::string duplicate_encoder(const std::string& word){
    
   unordered_map<char, int> charCount;

    for(char c : word) charCount[tolower(c)]++;

    string ans = "";

    for(char c : word) ans += (charCount[tolower(c)] > 1)? ')' : '(';

    return ans;
}
//------------------------------------------
#include <string>
#include <cctype>

std::string duplicate_encoder(const std::string& word){

    std::map<char, int> table;
    for(auto x : word) table[std::tolower(x)]++;
    
    std::string result;
    for(auto x: word) result += (table[std::tolower(x)]==1)? "(":")";
    
    return result;
}
//-------------------------------------------------

#include <string>
#include <algorithm>

std::string duplicate_encoder(const std::string& word){
    std::string encodedWord, comparisonWord;
    std::transform(begin(word), end(word), back_inserter(comparisonWord), ::tolower);

    std::transform(begin(comparisonWord), end(comparisonWord), back_inserter(encodedWord),
            [comparisonWord](char a) {
                int numDuplicates = count_if(begin(comparisonWord), end(comparisonWord), [a](auto elem) {return elem == a;});
                if (numDuplicates > 1) return ')';
                else return '(';
    });
    return encodedWord;
}


//----------------------------------------

#include <string>
#include <set>
std::string duplicate_encoder(const std::string& word)
{
    std::string res;
    for (char c : word) res.push_back(toupper(c));
    std::multiset<char> ms(res.begin(), res.end());
    for (char &c : res)
        c = ms.count(c) > 1 ? ')' : '(';
    return res;
}

//---------------------------------------------