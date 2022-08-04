// TODO: Include packages needed for this application
// inquirer 8.2.4 and related packages installed
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs");
const { resolve } = require('path');
// TODO: Create an array of questions for user input
// questions = user prompts
const questions = () => {
    console.log(`
    ====================
    Add Your Information
    ====================`)
    inquirer.prompt ([
        // NAME
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
        // GitHub User Name
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
    // Email address
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
    //     // Phone Number - commenting out in lieu of add contact information
    // {
    //     type:'confirm',
    //     name: 'conirmNumber',
    //     message: 'Would you like to add a phone number?',
    //     default: false,
    // },
    // {
    //     type: 'input',
    //     name: 'number',
    //     message: 'What is your contact number?',
    //     when: ({confirmNumber}) => confirmNumber
    // },
        // Additional Contact Information
    {
        type: 'confirm',
        name:'addContactConfirm',
        message: 'Would you like to enter additional contact information?',
        default: false
    },
    {
        type: 'input',
        name: 'addContact',
        message: 'Please enter additional contact information.',
        when: ({addContactConfirm}) => addContactConfirm,
    },

        // GitHub Repository Name
    {
        type:'input',
        name:'githubrepo',
        message: 'Please enter repository name.(Required)',
        validate: githubrepoInput => {
            if (githubrepoInput){
                return true;
            }else{
                console.log('Please enter the repository name.')
            }
        }
    },
        // Project Description
    {
        type: 'input',
        name:'description',
        message: 'Please add a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log('Please enter a repo description.')
            }
        }
    },
        // Installation Information
    {
        type: 'confirm',
        name: 'confirmInstall',
        default: true,
        message: 'Would you like to enter "Installation" information?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the needed steps to install your project.',
        when:({confirmInstall}) => confirmInstall
    },
        // Contribution Information
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like to enter "Contribute" information?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please add info on preferred method to contribute.',
        when: ({confirmContribute})=> confirmContribute
    },

    // Usage Information
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter "Usage" information?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and example usage.',
        when: ({confirmUsage})=> confirmUsage
    },
        
        // Language for Badge (Is there a way to loop over and get 1 per?)
    {
        type: 'checkbox',
        name: 'language',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
    },

    // {
    //     type:'confirm',
    //     name:'confirmcontact',
    //     message: 'Would you like to add contact information?',
    //     default: true,
    // },

    // {
    //     type: 'checkbox',
    //     name:'questions',
    //     choices: [
    //         {name: 'email', value:'email'},
    //         {name: 'phone', value:'phone'},
    //         {name: 'additional', value:'additional'}
    //     ],
    //     // when: ({confirmcontact}) => confirmcontact
    // },


    ]).then (function (userInput){
        const readmedata = generateMarkdown (userInput);
        writeToFile("dist/ReadME.md", readmedata)
    })
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync (fileName, data);
    console.log('File Created!')
}


// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();

