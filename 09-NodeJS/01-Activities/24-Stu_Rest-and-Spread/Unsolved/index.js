// Exercise 1 - Songs are listed within the array.
const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

// TODO: Which operator is being used here? - Spread.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console? - The list of songs within the array.
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do? - Reduce the array into 1 value.
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console? - Sum of the 1,2,3.
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter? - rest operator.
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console? - Sum of 1,2,3 (6).
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console? - 110.
console.log(additionSpread(1, 2, 3, 4, 100));
