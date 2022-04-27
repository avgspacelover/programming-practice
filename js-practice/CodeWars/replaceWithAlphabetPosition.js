// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
     let obj={};

      for(let i=0;i<alphabet.length;i++){
       obj[alphabet[i]]=  i+1 ;
      };
      
      let str="";
      
      text.split("").map(item => {
      
        let elem=item.toLowerCase()
        console.log(elem)
        if(obj.hasOwnProperty(elem)){
            str+=obj[elem]+ " "
        } 
    
    
      });

      return str.trim();
    }
/*

    function alphabetPosition(text) {
        return text
          .toUpperCase()
          .match(/[a-z]/gi)
          .map( (c) => c.charCodeAt() - 64)
          .join(' ');
      }
//-----------------------------------------------

      function alphabetPosition(text) {
        var result = "";
        for (var i = 0; i < text.length; i++){
          var code = text.toUpperCase().charCodeAt(i)
          if (code > 64 && code < 91) result += (code - 64) + " ";
        }
      
        return result.slice(0, result.length-1);
      }

      let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

//-----------------------------------------------

      function alphabetPosition(text) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        return text.toLowerCase().split('')
        .filter( letter => {
          let index = alphabet.indexOf(letter);
          return index > -1;
        }  )
        .map( letter => alphabet.indexOf(letter) + 1 )
        .join(' ')
      }


*/