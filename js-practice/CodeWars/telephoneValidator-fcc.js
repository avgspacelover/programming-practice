// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator



function telephoneCheck(str) {
    const regex= /^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/gm
  
    if(regex.test(str)){
      console.log("true", str)
      return true;
    } else return false;
    
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("1 555-555-5555")
  telephoneCheck("1 (555) 555-5555")
  telephoneCheck("5555555555")
  telephoneCheck("555-555-5555")
  telephoneCheck("(555)555-5555")
  telephoneCheck("1(555)555-5555")
  telephoneCheck("1 456 789 4444")
  telephoneCheck("555)-555-5555")


  /*


   
function telephoneCheck(str) {
  const validPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,

    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,

    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    // 5555555555
    /^\d{10}$/,

    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,

    // 1(555)555-5555
    /1\(\d{3}\)\d{3}-\d{4}/
  ];

  return validPatterns.some((pattern) => pattern.test(str));
}

*/