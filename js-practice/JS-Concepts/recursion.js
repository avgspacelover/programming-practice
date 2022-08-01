console.log('Hello, world!');

function repeater(char) {

  if(char.length == 5) return char
  
  return repeater(char+ char[0])
}

// To check if you've completed the challenge, uncomment these console.logs!
 console.log(repeater('g'));
 console.log(repeater('j'));



 function factorial(num) {
    if(num== 1) return 1
      
      return num* factorial(num-1)
    }
    
    // To check if you've completed the challenge, uncomment these console.logs!
    console.log(factorial(4)); // -> 24
    console.log(factorial(6)); // -> 720

    
    function getLength(array) {
        if(!array[0])return 0
          
          array.pop()
          
          return 1 + getLength(array)
        }
        
        // To check if you've completed the challenge, uncomment these console.logs!
        // console.log(getLength([1])); // -> 1
        // console.log(getLength([1, 2])); // -> 2
        // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
        // console.log(getLength([])); // -> 0



        function pow(base, exponent) {
            if(exponent<1) return 1
            
            exponent--
            return base *pow(base,exponent)
          
          }
          
          // To check if you've completed the challenge, uncomment these console.logs!
          // console.log(pow(2, 4)); // -> 16
          // console.log(pow(3, 5)); // -> 243




          function flow(input, funcArray) {
            if(!funcArray.length) return input
          
          const output = funcArray[0](input)
          
          return flow(output , funcArray.slice(1))
        }
        
        // To check if you've completed the challenge, uncomment this code!
         function multiplyBy2(num) { return num * 2; }
        function add7(num) { return num + 7; }
        function modulo4(num) { return num % 4; }
        function subtract10(num) { return num - 10; }
        const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
        console.log(flow(2, arrayOfFunctions)); // -> -7




        function shuffleCards(topHalf, bottomHalf,i=0, output=[]) {
            if(output.length== topHalf.length + bottomHalf.length) return output
        
            if(topHalf[i]!= undefined) output.push(topHalf[i])
          
            if(bottomHalf[i]!= undefined) output.push(bottomHalf[i])
          
            
            return shuffleCards(topHalf, bottomHalf, i+1, output)
        
          
        }
        
        
        
        // UNCOMMENT TO TEST YOUR WORK
            const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
            const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
            console.log(shuffleCards(topHalf, bottomHalf));
        //   /*-> ['Queen of Diamonds',
        //         'Jack of Hearts',
        //         'Five of Hearts',
        //         'Ten of Spades',
        //         'Ace of Spades',
        //         'Eight of Clubs',
        //       ]
        //   */



        function cascade(number) {
	
            if(!number || typeof number !== 'number') return undefined;
            
            console.log(number)
            
            if(number==1) return
            
            cascade(Math.floor(number/10));
            
            console.log(number)
          }
          
          /*
          cascade(123)    
          +- console.log(123)      123
          +- cascade(12)
          |  +- console.log(12)    12
          |  +- cascade(1)
          |  |  +- console.log(1)  1
          |  +- console.log(12)    12
          +- console.log(123)      123
          */
          
          
          // // Uncomment to test your work!
          cascade(111)
          // // should print
          // /*
          // 111
          // 11
          // 1
          // 11
          // 111
          // */



          // https://www.youtube.com/watch?v=NA2Oj9xqaZQ&ab_channel=Coderbyte