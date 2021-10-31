const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGitHub () {
        return this.github;
    }
}

module.exports = Engineer;
