//  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
// REVISE

function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
      return undefined;
    if (second === undefined)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
  }



  function addTogether() {
    const [first, second] = arguments;
    // First argument is not a number
    if (typeof(first) !== "number") {
      return undefined;
    }
    // First argument is a number
    //  and second argument is not defined
    else if (second === undefined) {
      function addSecond(second) {
        // New argument is not a number
        if (typeof(second) !== "number") {
          return undefined;
        }
        // New argument is a number
        else {
          return first + second;
        }
      }
      // Note: returning a *function*
      return addSecond;
    }
    // First argument is a number
    //  and second argument is not a number
    else if (typeof(second) !== "number") {
      return undefined;
    }
    // First argument is a number
    //  and second argument is a number
    else {
      return first + second;
    }
  }