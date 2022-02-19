// const inquirer = require("inquirer");
// const chalk = require("chalk");
// const Word = require("./Word");
// const words = require("./words");

// Manager Class

class Manager {
  // Initialize team member details
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.myTeamMembers = [];
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