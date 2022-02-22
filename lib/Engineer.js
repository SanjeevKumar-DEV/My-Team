const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        if (typeof githubUsername !== 'string' || !githubUsername.trim().length) {
            throw new Error("Expected parameter 'Github Username' to be required parameter");
        }
        this.githubUsername = githubUsername;
        this.githubProfile = `https://github.com/${this.githubUsername}`;
    }
    getGitHub() {
        return this.githubUsername;
    }

    getGithubProfile() {
        return this.githubProfile;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;