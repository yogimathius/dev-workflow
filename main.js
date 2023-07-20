/*
Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.
*/

/*
1) how do I take an unlimited number of command line arguments?
2) how do I go through each of them?
3) how do I know the argument is a whole number?
4) how do I sum them up?
5) how do I print the sum?
*/

/*
For loop takes three arguments:
1. iterator or index
2. condition which stops the loop
3. modifier of the iterator or index
*/
// for (let i = 0; i < 10; i++) {
//   console.log("I am iterating!!!", i);
// }

const commandLineArguments = process.argv.slice(2);

// How can I remove items from the beginning of an array? refer to slice docs
// console.log(commandLineArguments[arrayLength - 1]);
// How can I iterate over an array of unknown items?
// function sumArrayNumbers(array) {
const sumArrayNumbers = (array) => {
  const len = array.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    const element = array[i];
    const convertedNumber = Number(element);
    const isWholeNumber = Number.isInteger(convertedNumber);
    if (isWholeNumber) {
      result += convertedNumber;
    }
  }
  // console.log("returning result from sumArray: ", result);
  return result;
};

const result = sumArrayNumbers(commandLineArguments);

console.log("result from sumArrayNumbers execution: ", result);
