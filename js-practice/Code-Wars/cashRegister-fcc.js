// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register#

var denom = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
 var output = {status: null, change: []};
 var change = cash - price;
 var register = cid.reduce(function(acc, curr) {
 acc.total += curr[1];
 acc[curr[0]] = curr[1];
 return acc;
 }, {total: 0});
 if(register.total === change) {
 output.status = 'CLOSED';
 output.change = cid;
 return output;
 }
 if(register.total < change) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 var change_arr = denom.reduce(function(acc, curr) {
 var value = 0;
 while(register[curr.name] > 0 && change >= curr.val) {
 change -= curr.val;
 register[curr.name] -= curr.val;
 value += curr.val;
 change = Math.round(change * 100) / 100;
 }
 if(value > 0) {
 acc.push([ curr.name, value ]);
 }
 return acc;
 }, []);
 if(change_arr.length < 1 || change > 0) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 output.status = 'OPEN';
 output.change = change_arr;
 return output;
}

// REVISE!!!!

/*

const moneyMap = {
  'ONE HUNDRED': 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

const getTotalCid = (cid) =>
  cid.reduce((total, [unit, amount]) => total + amount, 0);

const safelyRoundMoney = (amount) => Math.round(amount * 100) / 100;

const checkCashRegister = (price, cash, cid) => {
  const change = [];
  let changeDue = cash - price;

  if (changeDue === getTotalCid(cid)) {
    return {
      status: 'CLOSED',
      change: cid,
    };
  }

  [...cid].reverse().forEach(([unit, amount]) => {
    const unitValue = moneyMap[unit];

    if (unitValue > changeDue) {
      return;
    }

    let unitsTaken = 0;

    while (changeDue >= unitValue && amount > 0) {
      changeDue = safelyRoundMoney(changeDue - unitValue);
      amount = safelyRoundMoney(amount - unitValue);
      unitsTaken++;
    }

    change.push([unit, unitsTaken * unitValue]);
  });

  if (changeDue > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }

  return {
    status: 'OPEN',
    change,
  };
};
*/

/*

MY FAILED SOLUTION

function checkCashRegister(price, cash, cid) {
   let bid=cid,newArr =[]
  let tempCash = {
  "PENNY":0,
  "NICKEL":0,
  "DIME":0,
  "QUARTER":0,
  "ONE":0,
  "FIVE":0,
  "TEN":0,
  "TWENTY":0,
  "ONE HUNDRED":0
}
 let valueMap = {
  "PENNY":0.01,
  "NICKEL":0.05,
  "DIME":0.1,
  "QUARTER":0.25,
  "ONE":1,
  "FIVE":5,
  "TEN":10,
  "TWENTY":20,
  "ONE HUNDRED":100
}
  let value= cid[0][1]*0.01 + cid[1][1]*0.05 + cid[2][1]*0.1 + cid[3][1]*0.25 + cid[4][1]*1 + cid[5][1]*5 + cid[6][1]*10 + cid[7][1]*20 + cid[8][1]*100;
  
 console.log("cid", cid)
  let balance = cash- price;
 
  if(value< balance){
    return {status:"INSUFFICIENT_FUNDS", change:[]}
  } else if(balance==0){
    console.log("closed")
    return {status:"CLOSED", change: cid}
  }
  tempCash["ONE HUNDRED"] = Math.floor(balance/100)
  balance%= 100
  console.log("BAL", balance)
  tempCash["TWENTY"] = Math.floor(balance/20)
  balance%= 20
  console.log("BAL", balance)
  tempCash["TEN"] = Math.floor(balance/10)
  balance%= 10
  tempCash["FIVE"] = Math.floor(balance/5)
  balance%= 5
  tempCash["ONE"] = Math.floor(balance/1)
  balance%= 1
  tempCash["QUARTER"] = Math.floor(balance/0.25)
  balance%= 0.25
  tempCash["DIME"] = Math.floor(balance/0.1)
  balance%= 0.1
  tempCash["NICKEL"] = Math.floor(balance/0.05)
  balance%= 0.05
  tempCash["PENNY"] = Math.ceil(balance/0.01)

   
  for(let i=0; i<tempCash.length;i++){
    if(tempCash[i]>cid[i]){
      
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
        console.log("hi")
        bid[i][1]= tempCash[i];
        console.log("tempCash", tempCash)
        }
  }
  Object.keys(tempCash).map((item) => {
   
    if(tempCash[item]){
      
      let arr=[item, tempCash[item]*valueMap[item]]
      newArr.push(arr)
    }
  })
  newArr.reverse()
  let register = { status:"OPEN", change:newArr}
  console.log(register)
  return register;
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

*/