// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
var questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your README?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license was used for your project?",
    choices: ["Mozilla", "Apache", "IBM", "MIT"],
  },
  {
    type: "input",
    name: "description",
    message: "What does this application do?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do I install this app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use this application?",
  },
  {
    type: "input",
    name: "contributer",
    message: "How do I contribute to this application?",
  },
  {
    type: "input",
    name: "tests",
    message: "How do I test this application?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  }
];
// created a promise instead of function to initialize app
// used writeFile to generate the new README with the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
function init() {
  inquirer.prompt(questions)
  .then(answers => {
    console.log("success");
    writeToFile("README.md", generateMarkdown({ ...answers}));
});
}
init();