// Write Your Code Below

var Equal = "The two values are equal and so is their type.";
var ValuesEqual = "The values are equal but their typing isn't.";
var NotEqual = "The two values aren't equal whatsoever.";

function compareValues(number1, number2) {
  if (number1 === number2) {
    return Equal;
  } else if (number1 == number2) {
    return ValuesEqual;
  } else {
    return NotEqual;
  }
}

console.log(compareValues("5", 5));
