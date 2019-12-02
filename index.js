const Manager = require("./lib/managers");
const Intern = require("./lib/interns");
const Engineer = require("./lib/engineers");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "profiles.html");
const render = require("./lib/html");

const employeeProfiles = [];
const employeeIds = [];

function startQuestions() {

  function buildProfiles() {
    console.log("Input the prompted information to build your profiles."),
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Manager's name: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "managerId",
        message: "Manager's ID: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Manager's email: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Manager's Office Number: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      employeeProfiles.push(manager);
      console.log(manager);
      employeeIds.push(answers.managerId);
      console.log(answers.managerId);
      groupProfiles();
    });
  }

  function groupProfiles() {

    inquirer.prompt([
      {
        type: "list",
        name: "chooseEmployee",
        message: "Choose a category of employee",
        choices: [
          "Engineer",
          "Intern",
          "(Exit)"
        ]
      }
    ]).then(userChoice => {
      switch(userChoice.chooseEmployee) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        groupProfiles();
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Engineer's name: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "engineerId",
        message: "Engineer's ID: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's email: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Engineer's github username: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      employeeProfiles.push(engineer);
      employeeIds.push(answers.engineerId);
      groupProfiles();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Intern's name: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "internId",
        message: "Intern's ID: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "internEmail",
        message: "Intern's email: ",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      },
      {
        type: "input",
        name: "internSchool",
        message: "Intern's school",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please do not leave field empty";
        }   
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      employeeProfiles.push(intern);
      employeeIds.push(answers.internId);
      groupProfiles();
    });
  }

  function groupProfiles() {
    fs.writeFileSync(outputPath, render(employeeProfiles), "utf-8");
  }

  buildProfiles();

}


startQuestions();

