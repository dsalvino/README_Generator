// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
var questions = [
     {//Title
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }, { //description
        type: 'input',
        name: 'description',
        message: 'describe your project!',
    }, { //installation instructions
        type: 'input',
        name: 'installation',
        message: 'how would you go about on installing this project?',
    }, {//usage information
        type: 'input',
        name: 'usage',
        message: 'describe how you use this and provide examples!',
    }, {//contribution guidelines
        type: 'input',
        name: 'contribution',
        message: 'do you want other developers to contribute to this project? tell them how here!'
    }, {//test instructions
        type: 'input',
        name: 'testing',
        message: 'tell people how to test this project!',
    }, {//badges and licenses
        type: 'checkbox',
        name: 'licenses',
        message: 'What license(s) do you want to include in your project?',
        choices: ['MIT', 'GPLv2', 'Apache'],
    }, {//Email
        type: 'input',
        name: 'email',
        message: 'What is your email to contact you if there are any problems?',
    }, {//github link
        type:'input',
        name: 'github',
        message: 'What is your GitHub username?',
    }
]
const generateREADME = (data) =>
    ` 
# ${data.title}
## About 
${data.description}


### Table of Contents
**[About](#about)**<br>
**[Installation Instructions](#installation-instructions)**<br>
**[Usage Information](#usage-information)**<br>
**[Test Instructions](#test-instructions)**<br>
**[Contribution Guidelines](#contribution-guidelines)**<br>
**[Licenses](#licenses)**<br>
**[Contact Me](#contact-me)**<br>

## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Test Instructions
${data.testing}
## Contribution Guidelines
${data.contribution}
## Licenses
${data.licenses}
## Contact Me
${data.email}
github.com/${data.github};

`
// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const READMEContent = generateREADME(data);
            const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
            // TODO: Create a function to write README file
            fs.writeFile(fileName, READMEContent, (err) =>
                err ? console.error(err) : console.log('success!')
            );
        });

// const {}
//     switch(data.) {
//         case 'MIT':
//             console.log('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
//             break;
//         case 'GPLv2':
//             console.log('[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)')
//             break;
//         case 'Apache':
//             console.log('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
//             break;
//         default:
//             console.log('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)')
            

//     }



}
init();
