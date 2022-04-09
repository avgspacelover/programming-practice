// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript



// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]


function DNAStrand(dna){
    let arr= dna.split("");
    let new_arr=[];
    arr.filter((item)=> {
      console.log(item);
      if(item==="A"){
        new_arr.push("T");
      } else if(item==="T"){
        new_arr.push("A");
      } else if(item==="C"){
        new_arr.push("G");
      } else if(item==="G"){
        new_arr.push("C");
      } else new_arr.push(item)
  
    },0)
  
      return new_arr.join("");
  
  }

  DNAStrand("AAAA")