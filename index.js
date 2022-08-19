// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

const readme = ({title,license, description, instructions, usage, contribution, test, username, email}) =>
`# ${title} 
## License Badge 
${license}
## Description 
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests) 
- [Questions](#questions)

## Installation
${instructions}

## Usage
${usage}

## Contributing 
${contribution}

## Tests
${tests}

## Questions
If you have questions about this project, you can reach me at ${email} or my github ${username}.
`;

// TODO: Create an array of questions for user input
inquirer
.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your README?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to use?",
    choices: ["Mozilla", "Apache", "IBM", "MIT"],
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
  const pageAnswers = readme(answers);
  fs.writeFile("README.md", pageAnswers, (err) => 
  err ? console.log(err) : console.log("success")
);
})

init();