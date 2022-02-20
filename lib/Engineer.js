const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
        this.githubProfile = `https://github.com/${this.githubUsername}`;
      }
}

module.exports = Engineer;