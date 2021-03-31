// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {// Need Title
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
        },
    ])
    .then((data) => {
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.json`;
        // TODO: Create a function to write README file
        fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => 
        err ? console.error(err) : console.log('success!')
        );
    })

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
