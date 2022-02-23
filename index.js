// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const ContentHTMLGenerator = require('./lib/ContentHTMLGenerator');
let teamManagerDetailsInput = [];
let teamMembersInput = [];
let teamManager;

// TODO: Create a function to initialize app and start capture of user input for team details.
function init() {
    getTeamDetails();
}


// Capture team manager's details

function getTeamDetails() {
    getAndSetManagerDetails();
}

function getAndSetManagerDetails() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `As part of team creation, enter team manager's name.`,
            },
            {
                type: 'input',
                name: 'employeeID',
                message: `Enter team manager's emplopyee ID..`,
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: `Enter team manager's email address.`,
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `Enter team manager's office number.`,
            },
        ])
        .then((data) => {
            teamManagerDetailsInput.push(data);
            // createTeamProfile();
            // prepareIndexHtml();
            addTeamMembers();
        });

}

// let insertEngineerYesInternNo = true;
const teamMemberType = ['Engineer', 'Intern']
const moreTeamMembers = ['Yes', 'No'];

function addTeamMembers() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Choose Engineer or Intern to be added as part of your team.',
                name: 'teamMemberType',
                choices: teamMemberType,
            },
            {
                type: 'input',
                name: 'name',
                message: `Enter name of your team member.`,
            },
            {
                type: 'input',
                name: 'employeeID',
                message: `Enter  employee ID of team member.`,
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: `Enter employee email address.`,
            },
            {
                type: 'input',
                name: 'schoolNameOrGithubUsername',
                message: `Enter school name for intern or github username for engineer.`,
            },
            {
                type: 'list',
                message: 'Choose Yes or No, if more team members needs to be added.',
                name: 'nextTeamMember',
                choices: moreTeamMembers,
            },
        ])
        .then((data) => {
            teamMembersInput.push(data);
            if (data.nextTeamMember === 'Yes') {
                addTeamMembers();
            }
            else {
                createTeamProfile();
                prepareIndexHtml();
            }
        });
}

function createTeamProfile() {
    teamManager = new Manager(teamManagerDetailsInput[0].name, teamManagerDetailsInput[0].employeeID, teamManagerDetailsInput[0].emailAddress, teamManagerDetailsInput[0].officeNumber);
    teamMembersInput.forEach(element => {
        if (element.teamMemberType == 'Engineer') {
            teamManager.addTeamMember(new Engineer(element.name, element.employeeID, element.emailAddress, element.schoolNameOrGithubUsername));
        }
        else {
            teamManager.addTeamMember(new Intern(element.name, element.employeeID, element.emailAddress, element.schoolNameOrGithubUsername));
        }
    });
    console.log(teamManager);
}

// prepare index.html

function prepareIndexHtml() {
    const fileName = './dist/index.html';
    // writeToFile(fileName, JSON.stringify(teamManager));
    const htmlContentObj = new ContentHTMLGenerator(teamManager);
    writeToFile(fileName, htmlContentObj.getCreatedHTMLContent());
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : 'Success!'
    );
}

// Function call to initialize app
init();
