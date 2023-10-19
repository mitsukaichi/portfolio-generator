const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Enter your Bio',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'Enter your LinkedIn URL',
        name: 'linku',
      },
      {
        type: 'input',
        message: 'Enter your GitHub URL',
        name: 'gitu',
      },
  ])
  .then((response) => {
    console.log(response)

  });
  
  fs.writeFile('index.html', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);
