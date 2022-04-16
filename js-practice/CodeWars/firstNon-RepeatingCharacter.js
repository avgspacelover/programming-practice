// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    let non_repeat = []
    if(s.length<1){
      return ""
    }

    let k=s.toLowerCase()
      k.split("").map((item,i) => {
      
        if(k.indexOf(item)=== k.lastIndexOf(item)){
          console.log(item, i, k.indexOf(item), k.lastIndexOf(item))
          non_repeat.push(s[i])
        }
      })
    
    return non_repeat.length ? non_repeat[0]: ""
  }

  //-------------------------

  function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }

  //-------------------------

  function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }

  //---------------------
  function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return s[i];
      }
    }
    return "";
  }