const inquirer = require('inquirer');
const Employee = require('./Employee');
let answers = {};

function Engineer(employeeInfo, engineerInfo) {
    this.name = employeeInfo.name;
    this.id = employeeInfo.id;
    this.email = employeeInfo.email;
        
    Engineer.prototype.engineerInformationPrompt = async () => {
        const prompt = [
            {
                type: 'input',
                name: 'github',
                message: 'Enter github username:'
            }
        ]
        answers = await inquirer.prompt(prompt);
        return answers;
    }

    this.github = answers.github;
    this.role = 'Engineer';
    
    

    // getGitHub() {
        
    // }

    // getRole() {
    //     return 'Engineer';
    // }
    
}

module.exports = Engineer;