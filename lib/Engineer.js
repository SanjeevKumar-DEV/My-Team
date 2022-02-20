const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
        this.githubProfile = `https://github.com/${this.githubUsername}`;
    }
    getGitHub() {
        return this.githubUsername;
    }

    getgithubProfile() {
        return this.githubProfile;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;