// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

const readme = ({title, description, instructions, usage, contribution, test, username, email}) =>
`
`
// TODO: Create an array of questions for user input
inquirer
.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your README?",
  },
  {
    type: "input",
    name: "description",
    message: "What does this application do?",
  },
  {
    type: "input",
    name: "instructions",
    message: "How do I install this app?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do I use this application?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How do I contribute to this application?",
  },
  {
    type: "input",
    name: "test",
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
  },
])
.then((answers) => {
  const pageAnswers = README.md(answers);
  fs.writeFile("README.md", pageAnswers, (err) => 
  err ? console.log(err) : console.log("success")
);
})
// function writeToFile(fileName, data) {
//   fs.writeFile(`${fileName}.md`, data, (err) =>
//   err ? console.log(err) : console.log("README has been generated.")
//   );
// };

// // TODO: Create a function to initialize app
// function init() {
//   let answers = userInput();
//   writeToFile((answers.fileName),(generateMarkdown(answers)));
// }

// Function call to initialize app
init();
console.log("hello");