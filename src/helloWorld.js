const myName = process.argv[2];
console.log(process.argv);

if (myName) {
  console.log(`Greetings, ${myName}!`);
} else {
  console.log("Hello, world!");
}
