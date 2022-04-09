// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
    let basePair= {"A":"T","G":"C","T":"A","C":"G"}
    let s=[];
    str
      .split("")
      .map((item)=> {
        let k=[];
        k.push(item)
        k.push(basePair[item])
        s.push(k)
      })
    return s;
  }
  
  pairElement("GCG");