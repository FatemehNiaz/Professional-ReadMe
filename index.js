// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("generateMarkdown.js")



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
