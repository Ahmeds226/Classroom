const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "list",
      message: "What languages do you know?",
      name: "language",
      choices: ["English", "French", "Spanish"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "communication",
      choices: ["Email", "Phone calls", "text messages"],
    },
  ])
  .then((response) => {
    console.log("Thank you for completing our survey!");

    console.log(response);
    fs.writeFile("log.txt", `name: ${response.name}`, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
