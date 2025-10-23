// Let's make a tip calculator with Node.js!

// Run this file with the node command:
// node tipCalculator.js

// let bill = 100;
// let tipPercentage = 0.2;
// let numGuests = 4;
//Reference : https://sebhastian.com/nodejs-process-argv/
//---Method 1:
// const { argv } = process;
// const [node, script, billAmount, tipPercent, guests] = argv;
// let bill = parseInt(billAmount);
// let tipPercentage = parseFloat(tipPercent);
// let numGuests = parseInt(guests);

////---Method 2:
// let bill = parseInt(process.argv[2]);
// let tipPercentage = parseFloat(process.argv[3]);
// let numGuests = parseInt(process.argv[4]);

////---Method 3:
let bill = Number(process.argv[2]);
let tipPercentage = Number(process.argv[3]);
let numGuests = Number(process.argv[4]);

//we want to calculate 3 values : tip amount, total bill, and the total for each guest

//calculating the tip amount
let tipAmount = bill * tipPercentage;
console.log("tip amount : $", tipAmount);

//total bill
let totalBill = bill + tipAmount;
console.log("total bill : $", totalBill);

//total for each guest
let totalForEachGuest = totalBill / numGuests;
console.log("total for each guest : $", totalForEachGuest);
