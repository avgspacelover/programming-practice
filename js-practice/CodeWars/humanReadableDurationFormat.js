// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

/*


The components are separated by a comma and a space (", "). Except the last component, 
which is separated by " and ", just like it would be written in English. 

1 minute and 0 seconds is not valid - it should be 1 minute.

For the purpose of this Kata, a year is 365 days and a day is 24 hours.
*/



// --------------------------------------
function formatDuration(seconds) {
  if (seconds === 0) {return 'now';}

  var years   = Math.floor(seconds / (60 * 60 * 24 * 365));
  var days    = Math.floor(seconds / (60 * 60 * 24      )) % 365;
  var hours   = Math.floor(seconds / (60 * 60           )) % 24;
  var minutes = Math.floor(seconds /  60                 ) % 60;
  var seconds =            seconds %  60;
  
  var duration = [years, days, hours, minutes, seconds];
  var units = ['year', 'day', 'hour', 'minute', 'second'];
  
  var linked = duration.map(function(el,ind) {
    if (el > 1) {return el + ' ' + units[ind] + 's'}
    if (el === 1) {return el + ' ' + units[ind]}
  }).filter(el => el !== undefined);
  
  if (linked.length > 1) {  // or just return linked.join(', ').replace(/,([^,]*)$/, " and$1")
    var last = linked.pop();
    return linked.join(', ') + ' and ' + last;
  } else {
    return linked[0];
  }
}

console.log(  formatDuration(62)  ); // '1 minute and 2 seconds'
// console.log(  formatDuration(60)  ); // '1 minute'
// console.log(  formatDuration(59)  ); // '59 seconds'
// console.log(  formatDuration(3662)  ); // '1 hour, 1 minute and 2 seconds'
// console.log(  formatDuration(3600*24*366)  ); // '1 year and 1 day'


//-----------------------------

function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }

  //-------------------------------

  function formatDuration (seconds) {
    if(!seconds)return "now";
    var strout = "";
    var s = seconds%60;
    seconds = (seconds-s)/60;
    var m = seconds%60;
    seconds = (seconds-m)/60;
    var h = seconds%24;
    seconds = (seconds-h)/24;
    var d = seconds%365;
    seconds = (seconds-d)/365;
    var y = seconds;
    
    var english=[];
    if(y)english.push(y+" year"+(y>1?'s':''));
    if(d)english.push(d+" day"+(d>1?'s':''));
    if(h)english.push(h+" hour"+(h>1?'s':''));
    if(m)english.push(m+" minute"+(m>1?'s':''));
    if(s)english.push(s+" second"+(s>1?'s':''));
    
    return english.join(", ").replace(/,([^,]*)$/," and$1");
    
  }

  //--------------------------------------------

  const formatDuration = s => s == 0 ? 'now' :
     [Math.floor(s/60/60/24/365),
      Math.floor(s/60/60/24)%365,
      Math.floor(s/60/60)%24,  
      Math.floor(s/60)%60 ,
      s%60]
     .map((e,i)=> e + ' ' + ['year', 'day', 'hour', 'minute', 'second'][i] + (+e>1?'s': ''))
     .filter(e=> !/^0/.test(e))
     .join(', ')
     .replace(/,\s(?=[\d\s\w]*$)/, ' and ');

//------------------------------------------

function formatDuration (seconds) {
    if (!seconds) return 'now';
    
    const resultArray = [];
    let secondsLeft = seconds;
    
    const numyears = Math.floor(seconds / (365*24*60*60) );
    const numdays = Math.floor(seconds % (365*24*60*60)  / (3600*24));
    const numhours = Math.floor(seconds % (3600*24) / 3600);
    const numminutes = Math.floor(seconds % 3600 / 60);
    const numbseconds = Math.floor(seconds % 60);
    
    if (numyears > 0) resultArray.push({ value: numyears, text: `year${(numyears > 1 ? 's' : '')}` });
    if (numdays > 0) resultArray.push({ value: numdays, text: `day${(numdays > 1 ? 's' : '')}` });
    if (numhours > 0) resultArray.push({ value: numhours, text: `hour${(numhours > 1 ? 's' : '')}` });
    if (numminutes > 0) resultArray.push({ value: numminutes, text: `minute${(numminutes > 1 ? 's' : '')}` });
    if (numbseconds > 0) resultArray.push({ value: numbseconds, text: `second${(numbseconds > 1 ? 's' : '')}` });
    
    return resultArray.reduce((str, { value, text }, i) => {
      if (i === resultArray.length-1) return str + `${value} ${text}`;
      if (i === resultArray.length-2) return str + `${value} ${text} and `;
      return str + `${value} ${text}, `;
    }, '');
  }