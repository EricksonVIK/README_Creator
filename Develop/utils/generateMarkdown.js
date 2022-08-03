// need the fs require
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderBadge(data) {
  console.log('called')
  console.log('data.language')
  return (`![badmath](https://img.shields.io/badge/language-${data.language}-blue)`)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
  return `
  # Title: ${data.title}
  ## Description: 
  ## Table of contents
  - [Installation] (#installation)
  // repeat for other sections
  ## License 
  // return none/"" or badge url from render function
  // Badge URLS based on type input https://img.shields.io/badge/MIT-license-red used as boiler plate
  ## Badge
  ${renderBadge(data.language)}
  ## Contributeind
  // yes or no - if no - empty string
  ## Tests
  ## Questions 
  // git hub link to profile
  // instructions on how to touch base --- based on checkbox answer from previous

`;
}

module.exports = generateMarkdown;
