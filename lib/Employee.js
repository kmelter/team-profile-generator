const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const { ChildProcess } = require('child_process');
const generateHTML = require('../src/generateHTML');
const employeeStore = [];
const roleStore = [];
let employeeCardStore = ``;
let answers = {};

const generateTemplate = async () => {
    for (let i = 0; i < employeeStore.length; i++) {
        let cardTemplate = `
        <div class="col">
            <div class="p-3 bg-primary text-white">
                <div class="text-white">${employeeStore[i].name}</div>
                <div class="text-white">${employeeStore[i].role}</div>
            </div>
            <div>
                <div class="p-3 border bg-light">ID: ${employeeStore[i].id}</div>
                <div class="p-3 border bg-light">Email: ${employeeStore[i].email}</div>
                <div class="p-3 border bg-light">${roleStore[i]}</div>
            </div>
          </div>
        `

        employeeCardStore = employeeCardStore.concat(` `, cardTemplate);
    }

    fs.writeFile('./dist/index.html', await generateHTML(employeeCardStore), err => 
        err ? console.log(err) : console.log('Success! Go to the dist folder to see your completed index.html file.')
    );
};

function Employee() {

    Employee.prototype.employeeInformationPrompt = async () => {
        const prompt = [
            {
                type: 'input',
                name: 'name',
                message: 'Enter employee name:'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter employee ID:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter employee email:'
            },
            {
                type: 'list',
                name: 'userType',
                message: 'Choose which to add:',
                choices: ['Intern', 'Engineer', 'Manager']
            }
        ]
    
        answers = await inquirer.prompt(prompt);
        console.log(answers);

        if (answers.userType === 'Manager') {
            let newManager = await new Manager(answers).managerInformationPrompt();
            employeeStore.push(newManager);
    
            let managerTemp = `<div>Office Number: ${employeeStore[employeeStore.length - 1].officeNumber}</div>`;
            roleStore.push(managerTemp);
            
            const prompt = [
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add a new employee?'
                }
            ]
            const answer = await inquirer.prompt(prompt);
            if (answer.addEmployee === true) {
                new Employee().employeeInformationPrompt();
            } else {
                generateTemplate();
            }
        }
        else if (answers.userType === 'Intern') {
            let newIntern = await new Intern(answers).internInformationPrompt();
            employeeStore.push(newIntern);
    
            let internTemp = `<div>School: ${employeeStore[employeeStore.length - 1].school}</div>`;
            roleStore.push(internTemp);
    
            const prompt = [
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add a new employee?'
                }
            ]
            const answer = await inquirer.prompt(prompt);
            if (answer.addEmployee === true) {
                Employee().employeeInformationPrompt();
            } else {
                generateTemplate();
            }
        }
        else if (answers.userType === 'Engineer') {
            let newEngineer = await new Engineer(answers).engineerInformationPrompt();
            employeeStore.push(newEngineer);
    
            let engineerTemp = `<div>GitHub: ${employeeStore[employeeStore.length - 1].github}</div>`;
            roleStore.push(engineerTemp);
    
            const prompt = [
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Would you like to add a new employee?'
                }
            ]
            const answer = await inquirer.prompt(prompt);
            if (answer.addEmployee === true) {
                Employee().employeeInformationPrompt();
            } else {
                generateTemplate();
            }
        }
        return answers;
    };
    
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;
}

module.exports = Employee;