// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
//const generateMarkdown = require("generateMarkdown.js")


function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
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
