const inquirer = require("inquirer")
const Manager = require("./dist/Manager")
const Engineer = require("./dist/Engineer")
const Intern = require("./dist/Intern")
const fs = require("fs")
const generatePage = require("./dist/generatePage")
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your managers name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is your manager's id?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your manager's email?",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "What is your manager's office number?",
  },
]

const employeeTypeQuestion = [
  {
    type: "list",
    name: "choice",
    message: "What type of employee would you like to add?",
    choices: ["Engineer", "Intern", "None"],
  },
]

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your engineers name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is your engineers id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your engineers email?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your engineers github username?",
  },
]

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your interns name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is your interns id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your interns email?",
  },
  {
    type: "input",
    name: "school",
    message: "Which school did your intern go to?",
  },
]

const teamMembers = []

async function init() {
  await inquirer.prompt(managerQuestions).then(async (answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    )
    teamMembers.push(manager)
    console.log(teamMembers)
    let employeeType
    while (employeeType !== "None") {
      await inquirer.prompt(employeeTypeQuestion).then(async (answer) => {
        employeeType = answer.choice
        if (employeeType === "Engineer") {
          await inquirer.prompt(engineerQuestions).then(async (answers) => {
            const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.username
            )
            teamMembers.push(engineer)
          })
        }
        if (employeeType === "Intern") {
          await inquirer.prompt(internQuestions).then(async (answers) => {
            const intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            )
            teamMembers.push(intern)
          })
        }
        console.log(teamMembers)
      })
    }
  })
  const data = generatePage(teamMembers) // Generated HTML Content from generatePage will go here
  fs.writeFile('team.html', data, (error) => {
    if (error) {
      return console.error(error)
    }
    console.log(`File Successfully Created: 'team.html'`)
  })
}

init()
