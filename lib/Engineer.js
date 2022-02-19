class Engineer {
    constructor(name, id, email, githubUsername) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.githubUsername = githubUsername;
        this.githubProfile = `https://github.com/${this.githubUsername}`;
      }
}

module.exports = Engineer;