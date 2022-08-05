const badge = [
  {
    name:'JavaScript',
    link: '![badmath](https://img.shields.io/badge/language-JavaScript-blue)'
  },  
  {
    name:'HTML',
    link: '![badmath](https://img.shields.io/badge/language-HTML-red)'
  },
  {
    name: 'CSS',
    link: '![badmath](https://img.shields.io/badge/language-CSS-brightgreen)'
  }
]

// Return license link
function renderLicenseLink(data) {
  return (`![badmath](https://img.shields.io/github/license/${data.github}/${data.githubrepo})`)
}

// Return Language badges
function renderBadgeJS(data) {
      for(let i=0; i < data.language.length; i++){
        console.log('in the for')
          if (data.language[i] == 'JavaScript'){
            console.log(badge[0].link)
            return `${badge[0].link}`
          }
        }
}

function renderBadgeHTML(data) {
  // console.log(badge)

      for(let i=0; i < data.language.length; i++){
        console.log('in the for')
          if (data.language[i] == 'HTML'){
            console.log(badge[1].link)
            return `${badge[1].link}`
          }
        }
}

function renderBadgeCSS(data) {
      for(let i=0; i < data.language.length; i++){
        console.log('in the for')
          if (data.language[i] == 'CSS'){
            console.log(badge[2].link)
            return `${badge[2].link}`
          }
        }
}

// return empty if false, input date if true
function renderEmptyContribute(data){
  if (data.confirmContribute === false){
    return data.contribute = "";
  } else {
    return `${data.contribute}`
  };
}

function renderEmptyUsage(data){
  if (data.confirmUsage === false){
    return data.usage = ""
  } else{
    return `${data.usage}`
  };
}

function renderEmptyContact(data){
  if (data.addContactConfirm === false){
    return data.addContact = ""
  } else{
    return `${data.addContact}`
  };
}

// generate the Readme
function generateMarkdown(data){
  console.log(data)
  return `
  # Title: ${data.githubrepo} ![](https://img.shields.io/github/languages/count/${data.github}/${data.githubrepo})

  ${renderBadgeJS(data)}
  ${renderBadgeHTML(data)}
  ${renderBadgeCSS(data)}
  ## Description 
  ${data.description}

  ## Table of contents
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Contact](#contact)
  - [License](#license)

  ## Usage
  ${renderEmptyUsage(data)}

  ## Contribute
  ${renderEmptyContribute(data)}

  ## Contact Information
  ![](https://github.com/${data.github}?tab=repositories) </br>
  [${data.email}](mailto:${data.email}) </br>
  ${renderEmptyContact(data)}

  ## License
  ${renderLicenseLink(data)}

`;
}

module.exports = generateMarkdown;
