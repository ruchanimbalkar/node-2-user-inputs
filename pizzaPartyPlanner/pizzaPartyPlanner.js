/* 

Your task: Make a Node.js pizza party planner that calculates how many slices of pizza each guest gets, and how many slices are left over!

Follow the instructions in the README.md file in this folder.

*/

//Pizza Party

const { argv } = process;
const [node, script, hostName, numPizzasOrdered, slicesPerPizza, numGuests] =
  argv;

//Assuming the host won't eat, let's calculate the total slices.
//The total slices will be  number of pizzas ordered times the slices per each pizza.
let totalSlices = Number(numPizzasOrdered) * Number(slicesPerPizza);
//The slices per Guest will be the total slices divided by the number of guests.
let slicesPerGuest = Math.floor(totalSlices / Number(numGuests));
//The number of left over slices will be the remainder of total slices divided by the number of guests.
let slicesLeftOver = totalSlices % Number(numGuests);

let outputMessage = `Hey ${hostName}! 🍕 You ordered ${numPizzasOrdered} pizzas with ${slicesPerPizza} slices each — that’s ${totalSlices} slices total!
Each of your ${numGuests} guests gets ${slicesPerGuest} slices, and you’ll have ${slicesLeftOver} slices left over.
Save those for breakfast! 😋`;

console.log(outputMessage);
