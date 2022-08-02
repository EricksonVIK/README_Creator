// TODO: Include packages needed for this application
// inquirer 8.2.4 and related packages installed
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs")
// TODO: Create an array of questions for user input
// questions = user prompts
const questions = () => {
    inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput){
                return true;
            } else {
                console.log('Please enter your GitHub username');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!')
            }
        }
    },

    {
        type: 'input',
        name: 'title',
        messate: 'Enter your repo title.'
    }

    ]).then (function (userInput){
        const readmedata = generateMarkdown (userInput);
        writeToFile("dist/ReadME.md", readmedata)
    })
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync (fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();

