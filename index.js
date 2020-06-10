const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    // Get GitHub username
    {
        type: 'input',
        name: 'username',
        message: 'GitHub username:'
    },

    // GitHub repository
    {
        type: 'input',
        name: 'repo',
        message: 'GitHub repository:'
    },
])
    .then((answers) => {
        console.log('Answers: ', answers);
    });