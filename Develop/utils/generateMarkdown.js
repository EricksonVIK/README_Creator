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
            (console.log(data.language))
            return (`![badmath](https://img.shields.io/badge/language-${data.language}-blue)`)
      }

    // data.map(({language}) =>{
    //   return (`![badmath](https://img.shields.io/badge/language-${data.language}-blue)`)

    // })
  };


// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
  return `
  # Title: ${data.githubrepo}
  ## Description: 
  ${data.description}
  ## Table of contents
  - [License](#license)
  - [Badge](#badge)
  - [Contribute](#contribute)
  - [Tests](#test)
  - [Questions](#questions)

  ## License
  ${renderLicenseLink(data)}

  ## Badge
  ${renderBadge(data)}
  ## Contribute
  
  ## Tests

  ## Questions 
  // can i enter an email and phone question based on answer to contact question?
  Please contact me via ${data.questions} with additional questions.
  https://github.com/${data.github}?tab=repositories
`;
}

module.exports = generateMarkdown;
