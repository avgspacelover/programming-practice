// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/cpp
// http://www.patrykkaczmarek.com/post/codewars-counting-duplicates-task-solution

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/solutions/cpp

#include <bits/stdc++.h>


size_t duplicateCount(const char* in) {
    std::string word (in);
    std::array<int, 26> charCount{};

    for (auto& letter : word) {
         letter = std::tolower(letter);
    }

    for (const auto& letter : word) {
        charCount[letter - 'a'] = charCount[letter - 'a'] + 1;
    }

    int moreThanOnce = 0;
    for (const auto& value : charCount) {
        if (value > 1) {
            moreThanOnce += 1;
        }
    }

    return moreThanOnce;
}

//-----------------------

#include <iostream>
#include <string>
#include <cstring>
#include <vector>
#include <set>
using namespace std;

size_t duplicateCount(const std::string& in); // helper for tests

size_t duplicateCount(const char* in)
{
    set<char> S, Sd;
  string str(in);
   for ( char c : str )
   {
      if ( !isalnum( c ) ) continue;
      c = tolower( c );
      if ( !S.insert(c).second ) Sd.insert(c);
   }
   return Sd.size();
}
