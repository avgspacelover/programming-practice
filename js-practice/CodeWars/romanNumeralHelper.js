// TODO: create a RomanNumerals helper object

//https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

class RomanNumerals{
  
    static toRoman(n){
     console.log("works")
       let throwStr=""
      
      let thou=n/1000
      while(thou){
        throwStr+="M"
        thou--;
      }
      n%=1000
      if(n>=900){
         console.log(throwStr) 
        throwStr+="CM"
         
      }else if(n>=500){
         console.log(throwStr) 
        throwStr+="D";
        
        let hun=(n%500)/100;
        while(hun){
          throwStr+="C"
          hun--;
          
        }
         n= ((n%500)%100);
        
      } else if(n>=100){
         console.log(throwStr) 
         let hun=n/100;
         while(hun){
           throwStr+="C";
           hun--;
         }
         n%=100;
      }
 
       if(n>=50){
          console.log(throwStr) 
         
         throwStr+="L";
           
         n%=50;
         
       }
       if(n>=10){
          console.log(throwStr) 
         
         let tens=n/10
         
         while(tens){
           
           throwStr+="X";
           
           tens--;
         }
         n%=10;
       }
       if(n==9){
         throwStr+="IX"
         n%=9
       }
       if(n>=5){
         throwStr+="V";
         n%=5;
         
       }
       if(n==4){
         throwStr+="IV"
         n%=4;
       }
      
       if(n>=1){
          console.log(throwStr) 
         while(n){
           throwStr+="I";
           n--;
         }
       }
      console.log(throwStr) 
      return throwStr;
      
    }
 
     static fromRoman(str){
      let digit={
        "VI":   0,  
        "I":	0,
        "IV":   0,
        "V":	0,
        "IX":   0,
        "LX":   0,
        "X":	0,
        "L":	0,
        "DC":   0,
        "C":	0,
        "D":	0,
        "M":	0
        }
      console.log("works")
      
       if(str.includes("IV")){
          
         digit["IV"]+=4
         
          } else if(str.includes("IX")){
             
             digit["IX"]+=9
            
          }
      let words= str.split("")
      
      words.reduce((prev,item,index) => {
        digit[item]+=1
      },0)

      digit["DC"]=(digit["D"]*5)+digit["C"];
      digit["D"]=0;digit["C"]=0;
      digit["LX"]=(digit["L"]*5)+digit["X"];
      digit["L"]=0;digit["X"]=0;
      digit["VI"]=(digit["V"]*5)+digit["I"];
      digit["V"]=0;digit["I"]=0;

      
      let count=""
      Object.keys(digit).reverse().map((item) => {
        if(digit[item]){
          count+= digit[item];
        }

        if((item=="DC" && digit[item]==0)||(item=="LX" && digit[item]==0)){
            count+=0;
        }
      })
      console.log(digit, count)
      return parseInt(count)
     
    }
 }

 //RomanNumerals.toRoman(1000)

 //RomanNumerals.toRoman(1990)

 RomanNumerals.fromRoman('MMVIII')

 //RomanNumerals.fromRoman('MDCLXVI')