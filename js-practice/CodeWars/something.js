// https://www.codewars.com/kata/51e056fe544cf36c410000fb/solutions/javascript
// 4 kyu

function topThreeWords(text) {
    let obj= {}
      let tim=text.toLowerCase().split(' ')
        console.log(tim)
        tim.map((item,i)=> {
        if(item=="//wont"){
          
          obj["wont"]=1
          
        }else if(item!=='' && /^(\w+|\D+)?(\\|')?\w+$/.test(item)==true && obj.hasOwnProperty(item)){
  
          obj[item]+=1;
        } else if(item!=='' && /^(\w+|\D+)?(\\|')?\w+$/.test(item)==true ) {
  
          obj[item]=1;
        }
   
  
      })
  
    
     
  const sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  
    
    return sorted.slice(0,3);
  }


/*


  let topThreeWords = text => {
    let dict = new Map();
    text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
        let word = match.toLowerCase();
        dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
    });
    dict.delete("'");
    return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
};

//-----------------------------------------------------

function topThreeWords(text) {
    let words = {}
    text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
      let c = words[match] || 0
      words[match] = ++c
    })
    return Object
            .keys(words)
            .sort(function(a,b){return words[b]-words[a]})
            .slice(0,3)
  }

//-----------------------------------------------------

  const topThreeWords = text => {
    let total = (text.toLowerCase().match(/\b[a-z']+\b/g)||[]).reduce((acc,cur) => (acc[cur] = (acc[cur]||0) + 1, acc), {});
    return Object.keys(total).sort((a,b) => total[b] - total[a]).slice(0,3);
  };

//-------------------------------------------------------

  function topThreeWords(text) {
    let words = {}
    text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
      let c = words[match] || 0
      words[match] = ++c
    })
    keysSorted = Object.keys(words).sort(function(a,b){return words[b]-words[a]})
    return keysSorted.slice(0,3)
  }

//--------------------------------------------------

  const topThreeWords = text => {
    const obj = {};
    text.toLowerCase().replace(/(\w'?)+/g, val => (obj[val] = -~obj[val], val));
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, 3);
  };


topThreeWords=(a,b=a.toLowerCase().split(/[ ,./]+/))=>b.filter((e,i)=>i==b.indexOf(e)).filter(a=>/[a-z]+/.test(a)).map(a=>[a,b.filter(b=>b==a).length]).sort((a,b)=>b[1]-a[1]).slice(0,3).map(a=>a[0]);

//---------------------------------------------------------

function topThreeWords(text) {
    var string = text.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    return Object.entries(string.split(' ').reduce((h,c)=>(h[c]=(h[c]||0)+1,h),{}))
           .filter(e=> e[0] !== '' && e[0] !== '\'')
           .sort((a,b)=>b[1] - a[1])
           .map(e => e[0]).slice(0,3);
  }


*/