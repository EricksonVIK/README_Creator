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
  if (data.currentLicense === true){
    return (`![badmath](https://img.shields.io/github/license/${data.github}/${data.githubrepo})`)
  } else {
    return data.currentLcense = ""
  }
}; 
  
function renderUserLicense (data) {
    if (data.confirmLicense === true) {
      return (`![badmath](https://img.shields.io/static/v1?label=License&message=${data.licenseChoice.title}&color=Greeen)`)
  } else {
    return data.confirmLicense = ""
  }
};

function renderLanguageCountBadge (data) {
  if (data.repoType === false) {
    return (`![](https://img.shields.io/github/languages/count/${data.github}/${data.githubrepo})`)
  } else {
    return data.repoType =""
  }
}; 

function renderLanguageBadge (data) {
  if (data.repoType === false) {
    return (`![](https://img.shields.io/github/languages/top/${data.github}/${data.githubrepo})`)
  } else {
    return data.repoType = ""
  }
};



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
  # ${data.githubrepo} ${renderLanguageCountBadge (data)}

  ${renderLanguageBadge (data)}

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
  https://github.com/${data.github} </br>
  [${data.email}](mailto:${data.email}) </br>
  ${renderEmptyContact(data)}

  ## License
  ${renderLicenseLink(data)}
  ${renderUserLicense(data)}

`;
}

module.exports = generateMarkdown;
