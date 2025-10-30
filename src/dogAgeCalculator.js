/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

//Reference : https://sebhastian.com/nodejs-process-argv/
// Use array destructuring assignment syntax to grab the arguments from the argv property as follows :

const dogAgeCalculator = () => {
  const { argv } = process;
  //store dog's name and age in variables dogName and age
  const [node, script, dogName, age] = argv;
  //Declare a variable named dogYears
  let dogYears;
  //Declare a variable named outputMessage
  let outputMessage;
  //if user did not enter dog's age
  if (age === null || age === undefined) {
    outputMessage = "You forgot to enter dog's age";
  } else if (age != undefined) {
    //if user entered negative number or String input  or 0 for dog's age
    if (isNaN(age) || Number(age) < 0 || Number(age) === 0) {
      //Assign outputMessage with an appropriate response telling user to enter a valid input for dog's age
      outputMessage = `Please enter a valid input (Input should be a positive number  > 0) for dog's age. You entered : ${age}`;
    } else {
      try {
        //try converting the input to integer value
        let dogAge = parseInt(age); // if user enters 7.5 //=> 7 (decimal part is truncated)
        switch (dogAge) {
          //if dog is 1 year old
          case 1:
            dogYears = 15; //convert to human years : - Human year 1 = 15 dog years
            break;
          //if dog is 2 years old
          case 2:
            dogYears = 15 + 9; // convert to human years : - Human year 2 = +9 more dog years
            break;
          default:
            let num = dogAge - 2; // count additional years after 2
            let multipliedBy5 = num * 5; //- For every year after that = +5 more dog years per human year
            dogYears = 15 + 9 + multipliedBy5; // convert to human years
            break;
        }
        //For above cases assign outputMessage with an appropriate response
        outputMessage = `Your dog, ${dogName}, is ${dogAge} years old, but that's ${dogYears} years old in dog years!`;
      } catch (error) {
        //catch errormessage and assign to outputMessage
        outputMessage = "Error Message:" + error;
      }
    }
  }
  //display output message on terminal because this is node
  console.log(outputMessage);
};

//Call Function Dog age calculator
dogAgeCalculator();
