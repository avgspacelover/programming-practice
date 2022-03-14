function getCount(str) {
    var vowelsCount = 0;
    const vowelLib=["a","e","i","o","u"];
     
    
    
    
    str.split("").forEach(item => {
        if(vowelLib.includes(item))
            {vowelsCount++}
    })
    
    console.log(vowelsCount);
    return vowelsCount;
  }

  getCount("hesoyam");


  /*
     Alternate way -1

    function getCount(str){
        let count = 0
        let vowels = "aeiou"
        for(let char of str) {
            if (vowels.includes(char)) count++ 

        }

        return count
    }

    Alternate way -2
    function getCount(str) {
        return [].reduce.call(str, (count, char) => (
            'aeiou'.includes(char) ? count + 1 : count
            ), 0);
    }

    Alternate way- 3(recursion)

    function getCount(str, count = 0) {
        if (str === '') return count;
        return getCount(
            str.substr(1),
            /[aeiou]/.test(str[0]) ? count + 1 : count
        );
    }

  */
/*
CPP



*/