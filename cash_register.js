/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/


//  SOLUTION
function checkCashRegister(price,cash,cid)
{
  //  STEP 1 CREATE THE NECESSARY VARIABLES

  //  result to be the object that we will return
  let result = 
  {
    status:'',
    change:[]
  };

  //  The change we need to return back to the customer
  let change = cash - price;

  //  we also need a total for the balances so we can loop through the cid
  //  and add up all balances
  let drawerTotal = 0;
  for (let i = 0; i < cid.length; i++)
  {
    drawerTotal += cid[i][1];
  }
  drawerTotal = drawerTotal.toFixed(2);

  // We will also need a 2D array to hold the values of each coin
  let coins = [
    ['ONE HUNDRED',100],
    ['TWENTY',20],
    ['TEN',10],
    ['FIVE',5],
    ['ONE',1],
    ['QUARTER',0.25],
    ['DIME',0.1],
    ['NICKEL',0.05],
    ['PENNY',0.01]
  ]

  //  We can then eliminate the first case
  //  Change is more than our drawer balance

  if(change > drawerTotal)
  {
    result.status = 'INSUFFICIENT_FUNDS';
    return result; 
  }
  //The Second Case change is equal to the drawer balance
  else if(change == drawerTotal)
  {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  }
  // The final and Most complex Case
  //  Change is less than our balance
  else if(change < drawerTotal)
  {

    //  Fisrt We'll need a list to hold the balance of each coin
    //  And another variable to hold the value of each coin that will be given as a balance
    let coinBalance = [];
    //Then we'll need to reverse the cid array to match our coins array
    cid = cid.reverse();
  
    //  Then we'll need to loop through the cid array, and using our coins array,
    //  where the coin value in coins array is less than the change we are giving the customer
    for(let i = 0; i < cid.length; i++)
    {
      let value = 0;
      while(coins[i][1] <= change && coins[i][1] <= cid[i][1])
      {
        change = change.toFixed(2);
        cid[i][1] -= coins[i][1];
        change -= coins[i][1];
        value += coins[i][1];
      }
      //  To check that we are not transferring empty values
      if(value > 0)
      {
        coinBalance .push([coins[i][0],value]);
      }

    }
    if(change > 0)
    {
      result.status = 'INSUFFICIENT_FUNDS';
      result.change = [];
      return result;
    }


    result.status = 'OPEN';
    result.change = coinBalance; 
    return result;
  }

}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

