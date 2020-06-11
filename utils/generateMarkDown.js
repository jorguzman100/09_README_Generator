
function generateMarkDown(data) {
    console.log(data);
            console.log('------------------------- file data -------------------------');
            fileData = `
# ${data.title}

${data.description}

## Badges

Code quality and validation

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/${data.username}/${data.repo}.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/${data.username}/${data.repo}/context:javascript)
![shields.io](https://img.shields.io/github/languages/top/${data.username}/${data.repo})
![shields.io](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%${data.username}.github.io%2F${data.repo}%2F)

Repository Status

![shields.io](https://img.shields.io/badge/Repo%20Status-In%20Progress-yellow)
![shields.io](https://img.shields.io/bitbucket/issues/${data.username}/${data.repo})

License

![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo})

## Table of contents

- [Title](#title)
  - [Badges](#badges)
  - [Table of contents](#table-of-contents)
  - [The challenge](#the-challenge)
  - [The development process](#the-development-process)
  - [The Output](#the-output)
  - [Installation and Usage](#installation-and-usage)
  - [Credits, tools and other references](#credits-tools-and-other-references)
  - [Contributing](#contributing)
  - [Questions](#questions)

## The challenge

${data.challenge}

## The development process

${data.process}

## The Output

${data.output}

## Installation and Usage

The project was uploaded to [GitHub](https://github.com/) at the following repository:
[https://github.com/${data.username}/${data.repo}](https://github.com/${data.username}/${data.repo})

You can access the deployed application with the GitHup Pages link:
[https://${data.username}.github.io/${data.repo}/](https://${data.username}.github.io/${data.repo}/)

${data.usage}

## Credits, tools and other references

**Third Party Assets**

${data.assets}

${data.otherAssets}

## Contributing

- Pull requests are welcome.
- For major changes, please open an issue first to discuss what you would like to change.
- Please make sure to update tests as appropriate.

## Questions

If you have questions or you want to share comments, we will be glad to hear from you. Please contact us at jorguzman100@gmail.com.

![GitHubProfilePicture](https://avatars3.githubusercontent.com/u/61070430?s=400&u=2b857b54876d926e32fa510d9363e301820b0c03&v=4)

`;
    return fileData;
}

module.exports = {
    "generateMarkDown": generateMarkDown,
}