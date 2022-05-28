// TODO: What are we importing?
// We are adding the node fs library to the code.
const fs = require("fs");

// TODO: Add comments to explain each of the three arguments of appendFile()
// Appendfile if the file doesnt exist creates teh file, and if it does exist it adds to the file.
//Also appendfile takes in 3 arguments; path, data and callback function.
fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
  // ternary operator takes in a condition followed by a (?)
  //then an expression to execute if the condition is truthly followed by a colon (:)
  //finally the expression
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log("Commit logged!")
);
