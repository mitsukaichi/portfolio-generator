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
    fs.writeFile('index.html', `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>User Information</h1>
    <form>
        <label for="name">Name</label><br>
        <p type="text" id="name" name="name">${response.name}</p><br>
        <label for="location">Loacation:</label><br>
        <p type="text" id="location" name="location">${response.location}</p><br>
        <label for="bio">Bio:</label><br>
        <p type="text" id="Bio" name="bio"></p>${response.bio}<br>
        <label for="linku">LinkedIn URL</label><br>
        <p type="text" id="linku" name="linku"></p>${response.linku}<br>
        <label for="gitu">GitHub URL:</label><br>
        <p type="text" id="gitu" name="gitu">${response.gitu}</p><br>
    
      </form>
 
<script src="script.js"></script>
</body>
</html>
    `, (err) =>
    err ? console.error(err) : console.log('Success!')
    );

 });
  
  
