const inquirer = require('inquirer');
const fs = require('fs');

let data = {};

inquirer
    .prompt([
        // Get GitHub username
        {
            type: 'input',
            name: 'username',
            message: 'GitHub username:',
            default: 'jorguzman100'
        },

        // GitHub repository
        {
            type: 'input',
            name: 'repo',
            message: 'GitHub repository:',
            default: '09_README_Generator'
        },

        // Project Title
        {
            type: 'input',
            name: 'title',
            message: 'Project Title:',
            default: 'Project Title'
        },

        // Project Description
        {
            type: 'input',
            name: 'description',
            message: 'Description:',
            default: 'Project description text text text text'
        },

        // Badges
        {
            type: 'checkbox',
            name: 'badges',
            message: 'Which badges will be included?',
            choices: ['Code quality', 'Main language', 'W3C HTML validation', 'Repo status', 'Issues', 'License'],
            default: ['Code quality', 'Main language', 'W3C HTML validation', 'Repo status', 'Issues', 'License'],
        },

        // The challenge
        {
            type: 'editor',
            name: 'challenge',
            message: 'Describe the project challenge and main elements.',
            default: `
Challenge description ...

Main elements:

- [x] Element
- [x] Element
- [x] Element
`,
        },

        // The development process
        {
            type: 'editor',
            name: 'process',
            message: 'Describe the development process.',
            default: `
In order to accomplish the challenge, the following steps were taken:

1. Define the purpose, and concept of the application.
2. Define MVPs (Minimum Viable Products) and due dates.
3. Research assets.
4. Define and build the base layout and grid, considering two stages:
   - Mobile-first approach.
   - Responsive design for larger screen sizes.
5. Create functionality.
6. Apply semantic HTML.
7. Asses valid HTML with W3C validator.
8. Benchmark the site with WebsiteGrader.
9. Final review and proper documentation.
`,
        },

        // The output
        {
            type: 'editor',
            name: 'output',
            message: 'Describe the project output.',
            default: `
With the described process we were able to create a useful, efficient and responsive application that ...

**User stories**

1. As a <role> I can <capability>, so that <receive benefit>
2. As a <role> I can <capability>, so that <receive benefit>
3. As a <role> I can <capability>, so that <receive benefit>

**The application**

![](picture url)
`,
        },

        // Installation and Usage
        {
            type: 'editor',
            name: 'usage',
            message: 'Describe the installation / usage steps.',
            default: `
To install the project follow these steps:

1. Step
2. Step
3. Step
`,
        },

        // Third party assets
        {
            type: 'checkbox',
            name: 'asset',
            message: 'Select third party assets.',
            choices: ['Balsamiq', 'Canvas', 'Placeholder', 'Random images', 'Lorem Ipsum', 'HTML color picker', 'Moment.js', 'CSS Materialize', 'Bootstrap', 'Test CORS', 'Font Awesome', "Google's Material Icons", 'Website Grader', 'W3C Markup valudation service', 'Other'],
            default: ['Bootstrap', 'Website Grader', 'W3C Markup valudation service', 'Other'],
        },
    ])
    .then((answers) => {
        data = { ...answers };
        console.log('Answers: ', answers);
        console.log('Include Others Assets: ', answers.asset.includes('Other'));
        if (answers.asset.includes('Other')) {
            const otherAssets = [];
            const askAsset = () => {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: `otherAssetsName`,
                        message: 'Asset name:',
                    },
                    {
                        type: 'input',
                        name: `otherAssetsUrl`,
                        message: 'Asset url:',
                    },
                    {
                        type: 'input',
                        name: 'continue',
                        message: 'Another asset?  (y/n)',
                        default: 'y',
                    }
                ]).then((answers3) => {
                    otherAssets.push({
                        name: answers3.otherAssetsName,
                        url: answers3.otherAssetsUrl,
                    });
                    if (answers3.continue === 'y') {
                        askAsset();
                    } else {
                        console.log('otherAssets: ', otherAssets);
                        data.otherAssets = otherAssets;
                        console.log('***** data *****');
                        console.log(data);
                    }
                });
            }
            askAsset();
        }
    });

