// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license === "None") {
    return ""
  } else if(data.license === "MIT") {
    return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if(data.license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if(data.license === "Boost") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
if(data.license === "None") {
  return ""
} else if(data.license === "MIT") {
  return `https://choosealicense.com/licenses/mit/`
} else if(data.license === "Apache") {
  return `https://choosealicense.com/licenses/apache-2.0/`
} else if(data.license === "Boost") {
  return `https://choosealicense.com/licenses/bsl-1.0/`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
 if (data.license === "None") {
  return "";
 } else {
  return `## License
${renderLicenseBadge(data)}\
${renderLicenseLink(data)}`
 }
}

function renderLicenseTOC(data) {
if(data.license === "None") {
  return ""
} else {
  return `* [License](#license)`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTOC(data)}
* [Contributors](#contributors)
* [Tests](#tests)
* [Github](#github)
* [Contact](#contact)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data)}

## Contributors
${data.contributions}

##  Tests
${data.tests}

## Github
Find my GitHub profile at: https://github.com/${data.github}

## Contact
You can contact me at: ${data.email}

`;
}

// TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  name: "title",
  message: "What is your projects name?"
},
{
  type: "input",
  name: "description",
  message: "Provide a short description explaining the what, why, and how of your project."
},
{
  type: "input",
  name: "installation",
  message: "What are the steps required to install your project?"
},
{
  type: "input",
  name: "usage",
  message: "Provide instructions and examples for use. Include screenshots as needed."
},
{
  type: "list",
  name: "license",
  message: "What license is needed?",
  choices: ['None', 'MIT', 'Apache', 'Boost'],
},
{
  type: 'input',
  name: 'contributions',
  message: 'Who contributed to this project?'
},
{
  type: 'input',
  name: 'tests',
  message: 'How did you test your app?'
},
{
  type: 'input',
  name: 'github',
  message: 'What is your GitHub username?'
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    console.log(data),
    err ? console.log(err) : console.log("README.md Successfully generated!")
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data)
  })
}

// Function call to initialize app
init();
