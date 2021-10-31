const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

class App {
    constructor() {
        this.myTeam = [];
        //begin inquirer
        this.teamQuiz = [
            {
                type: "list",
                message: "Enter your role",
                name: "role",
                choices: ["Manager", "Engineer", "Intern", "Finish"],
            },
            {
                type: "input",
                message: ({ role }) => `New ${role}.  Enter the ${role}'s name:`,
                name: "name",
                when: ({ role }) => role != "Finish",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("A name is required.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: ({ name }) => `What is ${name}'s employee ID?`,
                name: "id",
                when: ({ role }) => role != "Finish",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Employee ID is required.");
                        return false;
                    }
                },
            },
            {
                type: "input",
                message: ({ name }) => `What is ${name}'s email address?`,
                name: "email",
                when: ({ role }) => role != "Finish",
                validate: function (value) {
                    return value.match(
                        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
                    )
                        ? true
                        : "Invalid Email address";
                },
            },
            {
                type: "input",
                message: ({ name }) => `What is ${name}'s office number?`,
                name: "officeNumber",
                when: ({ role }) => role === "Manager",
                validate: (officeNumber) => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log("Office Number is required");
                    }
                },
            },
            {
                type: "input",
                message: ({ name }) => `What is ${name}'s GitHub username?`,
                name: "github",
                when: ({ role }) => role === "Engineer",
                validate: (github) => {
                    if (github) {
                        return true;
                    } else {
                        console.log("GitHub username is required");
                    }
                },
            },
            {
                type: "input",
                message: ({ name }) => `What is ${name}'s school?`,
                name: "school",
                when: ({ role }) => role === "Intern",
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        console.log("GitHub username is required");
                    }
                },
            },
        ];
    }

    run() {
        this.newMember();
    }

    newMember() {
        inquirer.prompt(this.teamQuiz).then((data) => {
            switch (data.role) {
                case "Finish":
                    this.generatePage();
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
        });
    }

    getTitle(person) {
        if (person.officeNumber) {
            return `<i class="fa-solid fa-golf-ball-tee mr-2"></i> Manager`;
        } else if (person.github) {
            return `<i class="fa-solid fa-hammer mr-2"></i> Engineer`;
        } else if (person.school) {
            return `<i class="fa-solid fa-mug-hot mr-2"></i> Intern`;
        } else {
            return "oops";
        }
    }

    getVariable(person) {
        if (person.officeNumber) {
            return `Office Number: ${person.officeNumber}`;
        } else if (person.github) {
            return `GitHub: <a href="https://github.com/${person.github}" target="_blank" rel="noopener noreferrer">${person.github}</a>`;
        } else if (person.school) {
            return `School: ${person.school}`;
        } else {
            return "oops";
        }
    }

    generateCards() {
        //this.myTeam.forEach((x) => console.log(x));
        let html = "";

        this.myTeam.forEach((emp) => {
            html += `<div class="card employee-card">
                    <div class="card-header bg-info text-white">
                        <h2 class="card-title">${emp.name}</h2>
                        <h4 class="card-subtitle mb-2">${this.getTitle(emp)}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${emp.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${emp.email}">${emp.email}</a></li>
                            <li class="list-group-item">${this.getVariable(emp)}</li>
                        </ul>
                    </div>
                </div>`;
        });

        return html;
    }

    generatePage() {
      let allHtml = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My Team</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body class="bg-secondary">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 team-heading bg-primary text-white">
                      <h1 class="text-center">My Team</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="team-area col-12 mt-3 ml-1 mr-1 mb-3 d-flex justify-content-between">
                      ${this.generateCards()}
                  </div>
              </div>
          </div>
      </body>
      </html>
      `;

      fs.writeFile('./dist/index.html', allHtml, function (err){
          if (err) throw err;
          console.log('Team page generated!')
      });
    }
}


module.exports = App;
