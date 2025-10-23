/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

//Reference : https://sebhastian.com/nodejs-process-argv/
const { argv } = process;
const [node, script, dogName, age] = argv;
let dogYears = 0;
//Default Value for outputMessage
let outputMessage = "Invalid input";
//if user entered negative number or string for dog's age
if (age != undefined) {
  if (isNaN(age)) {
    outputMessage = ` Please enter a number for the dog's age. You entered : ${age}`;
  } else {
    outputMessage = `Please enter a valid input (Input should be a positive number  > 0) for dog's age. You entered : ${age}`;
  }
}
//user forgot to enter dog's age
else {
  outputMessage = "You forgot to enter dog's age";
}
try {
  //try converting the input to integer value
  let dogAge = parseInt(age);
  //if user entered zero for dog's age
  if (dogAge == 0) {
    outputMessage = `Please enter a valid input (Input should be a positive number  > 0). You entered dog's age as ${age}.`;
  }
  //if dog is 1 years old
  else if (dogAge == 1) {
    dogYears = 15; //convert to human years : - Human year 1 = 15 dog years
    outputMessage = `Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`;
  }
  //if dog is 2 years old
  else if (dogAge == 2) {
    dogYears = 15 + 9; // convert to human years : - Human year 2 = +9 more dog years
    outputMessage = `Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`;
  } else if (dogAge > 2) {
    let num = dogAge - 2; // count additional years after 2
    let multipliedBy5 = num * 5; //- Every year after that = +5 more dog years per human year
    dogYears = 15 + 9 + multipliedBy5; // convert to human years
    outputMessage = `Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`;
  }
} catch (error) {
  //catch errormessage and concatenate with outputMessage
  outputMessage += error;
}

//display output message on terminal because this is node
console.log(outputMessage);
