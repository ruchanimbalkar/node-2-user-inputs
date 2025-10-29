/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

//Reference : https://sebhastian.com/nodejs-process-argv/
// Use array destructuring assignment syntax to grab the arguments from the argv property as follows :
const { argv } = process;
//store dog's name and age in variables dogName and age
const [node, script, dogName, age] = argv;
//Declare a variable named dogYears and assign it a value of zero (for now)
let dogYears = 0;
//Declare a variable named outputMessage and give it a default string value of "Invalid input"
let outputMessage = "Invalid input";
//if user entered negative number or string for dog's age
if (age != undefined) {
  if (isNaN(age)) {
    //Check if age is a string (not a number) using isNaN() method
    //Re-assign outputMessage with an appropriate response telling user to enter a number for dog's age
    outputMessage = ` Please enter a number for the dog's age. You entered : ${age}`;
  } else {
    //if user entered a negative number, re-assign outputMessage with an appropriate response
    outputMessage = `Please enter a valid input (Input should be a positive number  > 0) for dog's age. You entered : ${age}`;
  }
}
//user forgot to enter dog's age
else {
  //if user forgot to enter dog's age (age is undefined), re-assign outputMessage with an appropriate response
  outputMessage = "You forgot to enter dog's age";
}
try {
  //Assuming all above conditions are false and user entered a number as dog's age
  //try converting the input to integer value using parseInt
  let dogAge = parseInt(age); // this converts the user's age to an integer value, if the number is decimal (7.5) it rounds down to 7
  //if user entered zero for dog's age
  if (dogAge == 0) {
    //if dogAge is zero, re-assign outputMessage with an appropriate response
    outputMessage = `Please enter a valid input (Input should be a positive number  > 0). You entered dog's age as ${age}.`;
  }
  //if dog is 1 years old
  else if (dogAge == 1) {
    dogYears = 15; //convert to human years : -> Human year 1 = 15 dog years
    //if dogAge equals one, re-assign outputMessage with an appropriate response
    outputMessage = `Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`;
  }
  //if dog is 2 years old
  else if (dogAge == 2) {
    dogYears = 15 + 9; // convert to human years : - Human year 2 = +9 more dog years
    //if dogAge equals two, re-assign outputMessage with an appropriate response
    outputMessage = `Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`;
  } else if (dogAge > 2) {
    //if dogAge is greater than 2: calculate the dog's age
    let num = dogAge - 2; // count additional years after 2
    let multipliedBy5 = num * 5; //- Every year after that = +5 more dog years per human year
    dogYears = 15 + 9 + multipliedBy5; // convert to human years
    //if dogAge is greater than 2, re-assign outputMessage with an appropriate response
    outputMessage = `Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`;
  }
} catch (error) {
  //catch errormessage and concatenate with outputMessage
  outputMessage += error;
}

//display output message on terminal because this is node
console.log(outputMessage);
