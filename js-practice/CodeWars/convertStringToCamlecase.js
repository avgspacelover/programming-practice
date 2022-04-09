// https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"









function toCamelCase(str){
    let arr=[];
    
    if(str===" "){
        
        return " ";
        
    } else if(str.includes("-")){
         
        arr= str.split("-");
        

        } else if(str.includes("_")){
            arr=str.split("_");
            
        }
        
        let new_arr=[];

        arr.reduce((prevz,item, mapIndex)=>{

            let temp=item.split('');
            return temp.reduce((prev,element,index)=>{
                
                if(index===0 && mapIndex === 0){
                    
                    new_arr.push(element);

                } else if(index===0){
                        new_arr.push(element.toUpperCase());
                        
                    } else {
                            new_arr.push(element);
                            
                        }


            },0)
            
        },0) 
        
        const finished_goods = new_arr.join("");
        
        return finished_goods;
    
  
  }

  toCamelCase(" ");
  toCamelCase("the_stealth_warrior");

  toCamelCase("The-Stealth-Warrior");

  toCamelCase("A-B-C");


  /*
    function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

//--------------------------------

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

//------------------------------
function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}
//----------------------------------

function toCamelCase(str){
  return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}
//-----------------------------------

    
  */