// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    const stack = []
    
    for(const bracket of parens){
      if(bracket==="("){
        stack.push(bracket);
      } else if(stack.length!==0 && bracket===")"){
        stack.pop();
      } else return false;
     
      
    }
    return stack.length===0;
  }


  /*
  ALTERNATIVES

  function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
------------------------
function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}
------------------------
function validParentheses(parens){
  while(parens.indexOf('()') != -1){
    parens = parens.replace('()', '');
  }
  return !parens.length;
}
-----------------------------
function validParentheses(parens){
    return [...parens].reduce((a,c) => (a+c).replace("()",'') ) == ""?true:false;
}

---------------------------

FOR MULTIPLE TYPES OF PARENTHESIS->


 var isValid = function(parens) {
    
  const map = {
       ")": "(",
       "}": "{",
       "]": "["
   }
   const openParens = Object.values(map);
   const stack = [];
   for (const paren of parens) {
       if (openParens.includes(paren)) stack.push(paren);
       else if (stack.length !== 0 && stack.at(-1) === map[paren]) stack.pop();
       else return false;
   }
   return stack.length === 0;
   
};



*/