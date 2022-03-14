/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


*/






#include <string>

bool solution(const std::string& str, const std::string& ending) {
  return str.size() >= ending.size() && str.compare(str.size() - ending.size(), std::string::npos, ending) == 0;
}

-------

bool solution(std::string const &str, std::string const &ending) {
    return (std::string(str.end() - ending.size(), str.end()) == ending);
}

----

using namespace std;
bool solution(std::string const &str, std::string const &ending) {
     return equal(ending.begin(),ending.end(),str.end() - ending.size()); 
}

-----

bool solution(std::string const &str, std::string const &ending) {
    const int slen = str.length();
    const int eLen = ending.length();
    
    if (slen < eLen) {
        return false;
    }
    
    for (int i = 1; i <= eLen; i++) {
        if (str[slen - i] != ending[eLen - i]) {
            return false;
        }
    }
    return true;
}

---
bool solution(std::string const &str, std::string const &ending) {
    return std::equal(ending.rbegin(), ending.rend(), str.rbegin());
}

----
bool solution(std::string const &str, std::string const &ending)
{
    std::string::size_type n;
    n = str.find(ending, str.size()-ending.size());

    if (n == std::string::npos)
        return false;
    return true;
}
-----

bool solution(std::string const &str, std::string const &ending) {
  return str.find(ending, str.size() - ending.size()) != string::npos;
}