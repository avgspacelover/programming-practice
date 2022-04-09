//

function convertHTML(str) {
    const html= {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      "\"":"&quot;",
      "\'":"&apos;"
      }
      Object.keys(html).reduce((pv,item,i) => {
        if(str.includes(item)){
          str=str.replaceAll(item,html[item])
        }
        
        
      },0)
      
    return str;
  }
  
  convertHTML("Dolce & Gabbana");

  