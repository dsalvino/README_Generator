// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');
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
        type: 'list',
        name: 'licenses',
        message: 'What license(s) do you want to include in your project?',
        choices: [
            {
                name: 'MIT',
            }, {
                name: 'GPLv2',
            }, {
                name: 'Apache',
            },
        ],
    }, {//Email
        type: 'input',
        name: 'email',
        message: 'What is your email to contact you if there are any problems?',
    }, {//github link
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    }
]

    // // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
            .then((data) => {
                const fileName = './README.md';
                // TODO: Create a function to write README file
                fs.writeFile(fileName, generateREADME(data), (err) =>
                    err ? console.error(err) : console.log('success!')
                );
            });
    }
init();