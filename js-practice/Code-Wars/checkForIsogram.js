// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
    let result = true;
    if (str=== " "){return result}
    const arr= str.toLowerCase().split("");
        // iterate over the array
        for(let i = 0; i < arr.length;i++) {
           // compare the first and last index of an element
           if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
              result = false;
              // terminate the loop
              break;
           }
        }
        return result;
  
  }

  /*
    function isIsogram(str){ 
        return !/(\w).*\1/i.test(str)
    }

    //--------------------------

    function isIsogram(str){
        return new Set(str.toUpperCase()).size == str.length;
    }

    //---------------------------
    function isIsogram(str){
        return !str.match(/([a-z]).*\1/i);
    }
    //----------------------------

    function isIsogram(str) {
        return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
    }


  */