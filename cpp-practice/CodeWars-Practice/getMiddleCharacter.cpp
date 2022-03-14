//https://www.codewars.com/kata/56747fd5cb988479af000028/train/cpp

#include<string.h>
#include<iostream>


std::string get_middle(std::string input) 
{ std::string res;
  std::cout<<input<<"\n";
     int len = input.length();
     std::cout<< len<<"\n";
  if((len%2)==0){
     int i=(len/2 )-1;
     std::cout<<i<<"\n";
      std::cout<<input[i]<<"\n";
      std::cout<<input[i+1]<<"\n";
      res=res+ input[i]+input[i+1];
    
     std::cout<<res;
  } else{
     int i= len/2;
      res+=input[i];
    std::cout<<i<<res;
   }
  return res;
}
/*
ALTERNATIVES

std::string get_middle(std::string input) 
{
  int i = input.length();

  if ((i % 2) == 0) 
    return input.substr(i/2 - 1, 2);
    
  else
    return input.substr(i/2, 1);
}

*/