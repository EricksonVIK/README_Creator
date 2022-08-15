// inquirer 8.2.4 and related packages installed
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs");
const { resolve } = require('path');

// register plugin
inquirer.registerPrompt('search-list', require('inquirer-search-list'));
const licenseOptions = [
    {title: 'apache-2.0'}, {title: 'afl-3.0'}, {title: 'artistic-2.0'},
    {title: 'bsl-1.0'}, {title: 'bsd-2-clause'}, {title: 'bsd-3-clause-clear'},
    {title: 'cc'}, {title: 'cc0-1.0'}, {title: 'cc-by-4.0'}, {title: 'cc-by-sa-4.0'},
    {title: 'wtfpl'}, {title: 'ecl-2.0'}, {title: 'epl-2.0'}, {title: 'eupl-1.1'}, {title: 'agpl-3.0'},
    {title: 'gpl'}, {title: 'gpl-2.0'}, {title: 'gpl-3.0'}, {title: 'lgpl'}, {title: 'lgpl-2.1'}, 
    {title: 'lgpl-3.0'}, {title: 'isc'}, {title: 'lppl-1.3c'}, {title: 'ms-pl'}, {title: 'mit'}, {title:'mpl-2.0'}, 
    {title: 'osl-3.0'}, {title: 'postgresql'}, {title: 'ofl-1.1'}, {title: 'ncsa'}, {title: 'unlicense'}, {title: 'zlib'}
     ]
// questions = user prompts
const questions = () => {
    console.log(`
=============================
    Add Your Information
=============================`)
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
    {
        type:'confirm',
        name: 'repoType',
        message: 'Is this a new repository?'
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
        // Installation Information - potential future question
    // {
    //     type: 'confirm',
    //     name: 'confirmInstall',
    //     default: true,
    //     message: 'Would you like to enter "Installation" information?'
    // },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'Please describe the needed steps to install your project.',
    //     when:({confirmInstall}) => confirmInstall
    // },
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
        message: 'Please on contribution preferences. (ie, who is able and how)',
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


    // license logic maybe a when instead of validate?
    {
        type: 'confirm',
        name: 'currentLicense',
        message: 'Has a license been applied to the repository? (If Yes, final badge created based on active repo)',
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Will you be adding a license to the repo?',
        when: ({currentLicense}) =>  currentLicense === false
    },
    {
        type: 'search-list',
        name: 'licenseChoice',
        message: 'Please select a license. (Options revealed as you start typing.)',
        choices : licenseOptions.map(licenseOptions => ({name: licenseOptions.title, value: licenseOptions})),
        when: ({confirmLicense}) => confirmLicense
    },
    // {
    //     type: 'confirm',
    //     name: 'confirmLicense',
    //     message: 'Will you be adding a license to the repo?',
    //     when: ({confirmCurrentLicense}) => confirmCurrentLicense
    // },
    // {
    //     type: 'search-list',
    //     name: 'licenseChoice',
    //     message: 'Please select a license. (Options revealed as you start typing.)',
    //     choices : licenseOptions.map(licenseOptions => ({name: licenseOptions.title, value: licenseOptions})),
    //     when: ({confirmLicense}) => confirmLicense
    // }
        
        // Language for Badge (Commenting out for now, displaying sporadically)
    // {
    //     type: 'checkbox',
    //     name: 'language',
    //     choices: ['JavaScript', 'HTML', 'CSS'],
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

