// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
let teamDetailsInput = [];
let teamMembers = [];

// TODO: Create a function to initialize app and start capture of user input for team details.
function init() {
    getTeamDetails();
}


// Capture team manager's details

function getTeamDetails() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Please enter team manager's name.`,
            },
            {
                type: 'input',
                name: 'employeeID',
                message: `Please enter team manager's emplopyee ID..`,
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: `Please team manager's email address.`,
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `Please enter team manager's office number.`,
            },
        ])
        .then((data) => {
            teamDetailsInput.push(data);
            createTeamProfile();
            prepareIndexHtml();
        });

}

function createTeamProfile() {
    const teamManager = new Manager(teamDetailsInput[0].name, teamDetailsInput[0].employeeID, teamDetailsInput[0].emailAddress, teamDetailsInput[0].officeNumber );
    teamManager.addTeamMember('first');
    console.log(teamManager);
}

// prepare index.html

function prepareIndexHtml() {
    const fileName = './dist/index.html';
    writeToFile(fileName, JSON.stringify(teamDetailsInput));
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : 'Success!'
    );
}

// Function call to initialize app
init();
