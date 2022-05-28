// TODO: Import `maths.js`
const maths = require("./maths");

console.log(maths);
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const numOne = Number(process.argv[3]);
const numTwo = Number(process.argv[4]);

console.log(operation, numOne, numTwo);

// TODO: Create a `switch` statement that accepts an `operation` parameter
let result = 0;

switch (operation) {
  case "sum":
    result = maths.sum(numOne, numTwo);
    break;
  case "difference":
    result = maths.difference(numOne, numTwo);
    break;
  case "product":
    result = maths.product(numOne, numTwo);
    break;
  case "quotient":
    result = maths.quotient(numOne, numTwo);
    break;
  default:
    console.log("Please enter a correct operation");
    break;
}

console.log(result);
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
