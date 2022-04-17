const inquirer = require('inquirer');
const Employee = require('./Employee');
const index = require('../index.js');
let answers = {};

function Manager(employeeInfo) {
    

    Manager.prototype.managerInformationPrompt = async () => {
        
        
        const prompt = [
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter office number:'
            }
        ]
        answers = await inquirer.prompt(prompt);
        return answers;
    }
    
    this.name = employeeInfo.name;
    this.id = employeeInfo.id;
    this.email = employeeInfo.email;
    this.officeNumber = answers.officeNumber;
    this.role = 'Manager';

    //TODO: Employee properties and methods


    // getRole() {
    //     const managerRole = 'Manager';
    //     return managerRole;
    // };
}

module.exports = Manager;