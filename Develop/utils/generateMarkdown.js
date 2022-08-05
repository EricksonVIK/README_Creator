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
// was acting sporadically, will return to this bug in the future
// function renderBadgeJS(data) {
//   console.log('funct 1')
//       for(let i=0; i < data.language.length; i++){
//           if (data.language[i] === 'JavaScript'){
//             console.log(badge[0].link)
//             return `![badmath](https://img.shields.io/badge/language-JavaScript-blue)`
//           } 
//           else {
//             return ""
//           }
//         }
// }

// function renderBadgeHTML(data) {
//   console.log('funct 2')
//       for(let i=0; i < data.language.length; i++){
//           if (data.language[i] === 'HTML'){
//             console.log(badge[1].link)
//             return `![badmath](https://img.shields.io/badge/language-HTML-red)`
//           } 
//           else {
//             return ""
//           }
//         }
// }

// function renderBadgeCSS(data) {
//   console.log('funct 3')
//       for(let i=0; i < data.language.length; i++){
//           if (data.language[i] === 'CSS'){
//             console.log(badge[2].link)
//             return `![badmath](https://img.shields.io/badge/language-CSS-brightgreen)`
//           } 
//           else {
//             return ""
//           }
//         }
// }

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
  # ${data.githubrepo} ![](https://img.shields.io/github/languages/count/${data.github}/${data.githubrepo})

  ![](https://img.shields.io/github/languages/top/${data.github}/${data.githubrepo})

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

`;
}

module.exports = generateMarkdown;
