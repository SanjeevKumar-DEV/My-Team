const Employee = require('./Employee');
// const inquirer = require("inquirer");
// const chalk = require("chalk");
// const Word = require("./Word");
// const words = require("./words");

// Manager Class

class Manager extends Employee{
  // Initialize team member details
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.myTeamMembers = [];
  }
  getRole () {
      return 'Manager';
  }
  // Add team member
  addTeamMember(teamMember) {
    this.myTeamMembers.push(teamMember);
  }

  // Creates a new Word object using a random word from the array, asks the user for their guess
//   nextWord() {
    // const randWord = words[Math.floor(Math.random() * words.length)];
    // this.currentWord = new Word(randWord);
    // console.log("\n" + this.currentWord.toString() + "\n");
    // this.makeGuess();
//   }

}

module.exports = Manager;