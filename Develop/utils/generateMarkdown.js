// need the fs require
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  return (`![badmath](https://img.shields.io/github/license/${data.github}/${data.githubrepo})`)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function renderBadge(data) {
  console.log('called')
  console.log(data.language)
  // return (`![badmath](https://img.shields.io/badge/language-${data.language}-blue)`)
      for(let i=0; i < data.language.length; i++){
            return (`![badmath](https://img.shields.io/badge/language-${data.language}-blue)`)
      }
  };

function renderEmpty(data){
  console.log(data)
  if (data.confirmContribute === false){
    return data.contribute = "";
  };

  if (data.confirmUsage === false){
    return data.usage = ""
  // } else {
  //   return `${data.usage}`
  };

  if (data.addContactConfirm === false){
    return data.addContact === ""
  } else{
    return `${data.addContact}`
  };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
  return `
  # Title: ${data.githubrepo}

  ${renderBadge(data)}
  ## Description 
  ${data.description}

  ## Table of contents
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Questions](#questions)
  - [Suggestions](#suggestions)
  - [License](#license)

  ## Usage
  ${renderEmpty(data)}

  ## Contribute
  ${renderEmpty(data)}

  ## Questions 
  GitHub: https://github.com/${data.github}?tab=repositories

  ## Suggestions
  
  Contact Info: </br>
  [${data.email}](mailto:${data.email})
  ${renderEmpty(data)}

  ## License

  ${renderLicenseLink(data)}

`;
}

module.exports = generateMarkdown;
