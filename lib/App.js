const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

class App {
    constructor() {
        this.myTeam = [];
        //begin inquirer
        this.teamQuiz = [
            {
                type: "list",
                message: "Enter your role",
                name: "role",
                choices: ["Manager", "Engineer", "Intern", "Finish" ],
            },
            {
                type: "input",
                message: ({role}) => `New ${role}.  Enter the ${role}'s name:`,
                name: "name",
                when: ({role}) => role != "Finish",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log('A name is required.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: ({name}) => `What is ${name}'s employee ID?`,
                name: "id",
                when: ({role}) => role != "Finish",
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Employee ID is required.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: ({name}) => `What is ${name}'s email address?`,
                name: "email",
                when: ({role}) => role != "Finish",
                validate: function (value) {
                    return value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/) ? true : "Invalid Email address";
                }
            },
            {
                type: "input",
                message: ({name}) => `What is ${name}'s office number?`,
                name: "officeNumber",
                when: ({role}) => role === "Manager",
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Office Number is required");
                    }
                }
            },
            {
                type: "input",
                message: ({name}) => `What is ${name}'s GitHub username?`,
                name: "github",
                when: ({role}) => role === "Engineer",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log("GitHub username is required");
                    }
                }
            },
            {
                type: "input",
                message: ({name}) => `What is ${name}'s school?`,
                name: "school",
                when: ({role}) => role === "Intern",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log("GitHub username is required");
                    }
                }
            }
        ];
    }

    run() {
        this.newMember();
    }

    newMember() {
        inquirer.prompt(this.teamQuiz).then(data => {
            switch (data.role) {
                case "Finish":
                    this.generatePage();
                    console.log("Team Profile Generated");
                    break;
                case "Manager":
                    this.myTeam.push(new Manager(data.name, data.id, data.email, data.officeNumber));
                    this.newMember();
                    break;
                case "Engineer":
                    this.myTeam.push(new Engineer(data.name, data.id, data.email, data.github));
                    this.newMember();
                    break;
                case "Intern":
                    this.myTeam.push(new Intern(data.name, data.id, data.email, data.school));
                    this.newMember();
                    break;
            }
            console.log(JSON.stringify(data));
        });
    }

    generatePage() {

    }
}

module.exports = App;
