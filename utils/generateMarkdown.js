// if there is no licesne return an empty string 
function renderLicenseBadge(license) {
  if(license !== 'no license used'){
    return `![badge](https://img.shields.io/badge/license-${license}-blue )`;
  } else{
    return ' ';
  }
};
// if there is no license return an empty string 
function renderLicenseBadge(license) {
  if(license !== 'no license used'){
    return `![badge](https://img.shields.io/badge/license-${license}-blue )`;
  } else{
    return ' ';
  }
};

// Create a function that returns the license section of README 
// If there is no license return an empty string 
function renderLicenseSection(license) {
  if (license !== 'no license used'){
    return `[License](#table-of-contents) 
    This project is under the following license: 
    `;
  } else{
    return '';
  }
};

function renderLicenseToTableOfContents(license) {
  if (license !== 'no license used'){
    return `[License](#license)`;
  } else{
    return '';
  }
}

// Create a function to generate Markdown for readme 
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* ${renderLicenseToTableOfContents(data.license)}

* [Contributer](#contributer)

* [Tests](#tests)

* [Questions](#questions)
 
 ## [Description](#table-of-contents)
 ${data.description} 

 ## [Installation](#table-of-contents)
 ${data.installation}

 ## [Usage](#table-of-contents)
 ${data.usage}

 ## ${renderLicenseSection(data.license)}
 ${renderLicenseBadge(data.license)}
 
 ## [Contributer](#table-of-contents)
 ${data.contributer}

 ## [Tests](#table-of-contents)
 ${data.tests}

 ## [Questions](#table-of-contents)

 To see my other work take a look at my public repositories on github:

 Github: [Github Link](${data.githubURL})

 To contact me directly please reach out to the following email:

 Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;